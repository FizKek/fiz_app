import { useState, useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";

import { injected } from "../../utils/web3/connectors";
import { useEagerConnect, useInactiveListener } from "../../utils/web3/hooks";
import { Button } from "../Button/Button";

const connectorsByName = {
  Injected: {
    text: "MetaMask",
    connector: injected,
  },
};

export function Web3Status({ type, ...props }) {
  const { connector, account, activate, deactivate, active, error } =
    useWeb3React();
  const wrongNetwork = error instanceof UnsupportedChainIdError;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const accountValue =
    account === undefined ? "..." : account === null ? "None" : account;

  const Status = ({ type }) =>
    active ? (
      <div type={type}>{accountValue}</div>
    ) : error ? (
      <div type={type}>
        {wrongNetwork && connector === injected ? "Wrong network" : "Error"}
      </div>
    ) : (
      <div type={type}></div>
    );

  const StatusContent = () => {
    if (error instanceof UnsupportedChainIdError) {
      return <span></span>;
    }

    const TryAgain = () => (
      <>
        <span></span>
        <Button
          onClick={() => {
            if (connector === injected) {
              deactivate();
            }
          }}
        >
          Try again
        </Button>
      </>
    );

    if (connector === injected) {
      if (error) {
        return <TryAgain />;
      }

      return (
        <>
          <h3></h3>
          <br />
          <span></span>
        </>
      );
    }

    if (error) {
      return <span>Error. Try to reload the page.</span>;
    }

    return (
      <>
        <h4></h4>
        {Object.keys(connectorsByName).map((name) => {
          const currentConnector = connectorsByName[name].connector;
          const activating = currentConnector === activatingConnector;
          const connected = currentConnector === connector;
          const disabled =
            !triedEager || !!activatingConnector || connected || !!error;

          const connectFunction = () => {
            setActivatingConnector.call(this, currentConnector);
            activate.call(this, connectorsByName[name].connector);
          };

          return (
            <Button disabled={disabled} key={name} onClick={connectFunction}>
              {connectorsByName[name].text}&nbsp;
              <span>
                {activating && <span>(waiting...)</span>}
                {connected && <span>(connected)</span>}
              </span>
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <div {...props}>
      <StatusContent />
      <Status type={type} />
    </div>
  );
}

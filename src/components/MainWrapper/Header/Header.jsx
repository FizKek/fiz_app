import {
  Header as HeaderStyled,
  HeaderLogo,
  HeaderChainStatus,
} from "./Header.module.scss";
import { Web3Status } from "../../";
import {Button} from "../../Button/Button";

export function Header() {
  return (
    <div className={HeaderStyled}>
      <p>
        <strong>FizContracts</strong>
      </p>

        <Web3Status className={HeaderChainStatus}>

          </Web3Status>

    </div>
  );
}

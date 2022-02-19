import {
  Header as HeaderStyled,
  HeaderLogo,
  HeaderChainStatus,
} from "./Header.module.scss";
// import { Web3Status } from "../../";

export function Header() {
  return (
    <div className={HeaderStyled}>
      <p><strong>FizContracts</strong></p>
      {/*TODO: add this <Web3Status className={HeaderChainStatus} />*/}
    </div>
  );
}

import {
  Header as HeaderStyled,
  HeaderLogo,
  HeaderChainStatus,
} from "./Header.module.scss";

import {ButtonMetaMask} from "../../Button/ButtonMetaMask";

export function Header() {
  return (
    <div className={HeaderStyled}>
      <p><strong>FizContracts</strong></p>
          <ButtonMetaMask>
          </ButtonMetaMask>
    </div>
  );
}

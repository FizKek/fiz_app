import {
  Header as HeaderStyled,
  HeaderLogo,
  HeaderChainStatus,
} from "./Header.module.scss";

import {Button} from "../../Button/Button";

export function Header() {
  return (
    <div className={HeaderStyled}>
      <p><strong>FizContracts</strong></p>
          <Button>
          </Button>
    </div>
  );
}

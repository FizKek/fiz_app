import {
  Footer as FooterStyled,
  FooterIcons,
  FooterCopyright,
} from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={FooterStyled}>
      <div className={FooterCopyright}>
        <a href="https://definitionhack.io/" target="_blank">
          <p>Created on Definition Hackathon</p>
        </a>
      </div>
    </div>
  );
}

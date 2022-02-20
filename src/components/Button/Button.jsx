import { Button as ButtonStyled } from "./Button.module.scss";

export function Button({ children, onClick }) {
  return <button className={ButtonStyled} onClick={onClick}>{children}</button>;
}

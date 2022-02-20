import { Button as ButtonStyled } from "./Button.module.scss";

export function Button({ children }) {
  return <button className={ButtonStyled}>{children}</button>;
}

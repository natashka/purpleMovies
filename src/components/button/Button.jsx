import styles from "./button.module.css";
import classNames from "classnames";

export function Button({ text, onClick, children }) {
  return (
    <button className={classNames(styles.btn)} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

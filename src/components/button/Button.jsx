import styles from "./button.module.css";
import classNames from "classnames";

export function Button({ ref, text, onClick, children }) {
  return (
    <button className={classNames(styles.btn)} onClick={onClick} ref={ref}>
      {text}
      {children}
    </button>
  );
}

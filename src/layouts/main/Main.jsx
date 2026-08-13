import classNames from "classnames";
import styles from "./main.module.css";

export function Main({ children }) {
  return <main className={classNames(styles.main)}>{children}</main>;
}

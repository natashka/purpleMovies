import classNames from "classnames";
import styles from "./main.module.css";

export function Main({ children }) {
  return (
    <main className={styles["main-block"]}>
      <div className={classNames(styles.main)}>{children}</div>
    </main>
  );
}

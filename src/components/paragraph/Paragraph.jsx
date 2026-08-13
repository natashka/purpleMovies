import styles from "./paragraph.module.css";
import classNames from "classnames";

export function Paragraph({ fontSize, text }) {
  return (
    <div className={classNames(styles.paragraph, {})}>
      <p
        className={classNames(styles.root, {
          [styles.fs16]: fontSize === "16",
          [styles.fs20]: fontSize === "20",
        })}
      >
        {text}
      </p>
    </div>
  );
}

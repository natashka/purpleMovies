import styles from './button.module.css'
import classNames from "classnames";

export function Button({text, children}) {
    return <button className={classNames(styles.btn)}>
        {text}
        {children}
    </button>
}
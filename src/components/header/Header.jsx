import styles from './header.module.css'

export function Header({text}) {
    return (
        <h1 className={styles.header}>
            {text}
        </h1>
    )
}
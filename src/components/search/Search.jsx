import classNames from "classnames";
import styles from "./search.module.css";

export function Search({ isComplex, name, onChange, placeholder, value }) {
  return (
    <>
      <div className={classNames(styles.searchWrapper)}>
        {isComplex && (
          <img
            className={classNames(styles.searchIcon)}
            src="/search.svg"
            alt="search"
          />
        )}
        <input
          type={"text"}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className={classNames(styles.searchField)}
        />
      </div>
    </>
  );
}

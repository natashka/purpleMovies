import classNames from "classnames";
import styles from "../input/input.module.css";

export function Input({ isComplex, name, onChange, placeholder, value }) {
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

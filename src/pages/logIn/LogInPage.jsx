import { MenuHeader } from "../../layouts/menuHeader/MenuHeader.jsx";
import { Search } from "../../components/search/Search.jsx";
import { Button } from "../../components/button/Button.jsx";
import { useState } from "react";
import styles from "./logInPage.module.css";
import classNames from "classnames";

export function LogInPage() {
  const [username, setUsername] = useState("");
  return (
    <>
      <MenuHeader />
      <div className={classNames(styles["login"])}>
        <Search
          isComplex={false}
          name="login"
          placeholder="Введите имя"
          value={username}
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <Button onClick={() => setUsername("")} text="Войти в профиль" />
      </div>
    </>
  );
}

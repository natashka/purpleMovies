import { MenuHeader } from "../../layouts/menuHeader/MenuHeader.jsx";
import { Search } from "../../components/search/Search.jsx";
import { Button } from "../../components/button/Button.jsx";
import styles from "./logInPage.module.css";
import classNames from "classnames";
import { Main } from "../../layouts/main/Main.jsx";
import { useUsers } from "../../hooks/useUsers.jsx";
import { useState } from "react";

export function LogInPage() {
  const [user, setUser] = useState("");
  const [currentUser, login, logout] = useUsers();

  return (
    <>
      <MenuHeader currentUser={currentUser} logout={logout} />
      <Main>
        <div className={classNames(styles["login"])}>
          <Search
            isComplex={false}
            name="login"
            placeholder="Введите имя"
            value={user}
            onChange={(e) => {
              e.preventDefault();
              setUser(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              login(user);
            }}
            text="Войти в профиль"
          />
        </div>
      </Main>
    </>
  );
}

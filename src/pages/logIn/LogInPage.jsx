import {MenuHeader} from "../../layouts/menuHeader/MenuHeader.jsx";
import {Search} from "../../components/search/Search.jsx";
import {Button} from "../../components/button/Button.jsx";
import styles from "./logInPage.module.css";
import classNames from "classnames";
import {Main} from "../../layouts/main/Main.jsx";
import {useUsers} from "../../hooks/useUsers.jsx";
import {useEffect, useRef, useState} from "react";

export function LogInPage() {
  const [user, setUser] = useState("");
  //const [result, setResult] = useState("");
  const [currentUser, login, logout] = useUsers();

  const loginButtonRef = useRef(null);
  const loginInputRef = useRef(null);

  const handleChange = (event) => {
    //event.preventDefault();
    setUser(event.target.value);
  };

  // чтобы при нажатии Enter форма случайно не перезагрузила страницу
  // const handleKeyDown = (event) => {
  //   console.log("ddd");
  //   if (event.key === "Enter") {
  //     console.log("enter");
  //     event.preventDefault();
  //     loginButtonRef.current?.click();
  //   }
  // };

  // const handleButtonClick = () => {
  //   if (user.trim() === "") return; // проверка на пустую строку
  //
  //   setResult(user); // сохраняем результат
  //   setUser(""); // очищаем стейт (инпут очистится сам, так как он привязан к value)
  //   loginInputRef.current?.focus(); // возвращаем фокус на инпут
  // };

  useEffect(() => {
    loginInputRef.current?.focus();
  }, []);

  const handleButtonClick = () => {
    console.log("user: " + user);
    if (user.trim() === "") return; // Защита от пустого ввода

    login(user); // Передаем текущего пользователя в функцию логина
    setUser(""); // ✅ Очищаем инпут ПРАВИЛЬНО (через стейт)

    // Возвращаем фокус
    loginInputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Если пользователь нажал комбинацию Ctrl + Enter (или Cmd + Enter)
      if (event.key === "Enter") {
        event.preventDefault();
        // Эмулируем клик по кнопке
        loginButtonRef.current?.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <MenuHeader currentUser={currentUser} logout={logout} />
      <Main>
        <div className={classNames(styles["login"])}>
          <Search
            ref={loginInputRef}
            isComplex={false}
            name="login"
            placeholder="Введите имя"
            value={user}
            onChange={handleChange}
            //onKeyDown={handleKeyDown}
          />
          <Button
            ref={loginButtonRef}
            onClick={handleButtonClick}
            text="Войти в профиль"
          />
        </div>
      </Main>
    </>
  );
}

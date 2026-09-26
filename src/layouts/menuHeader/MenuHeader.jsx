// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import classNames from "classnames";
import styles from "./menuHeader.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

export function MenuHeader() {
  const { user, isAuth, logout } = useContext(UserContext);
  return (
    <header className={classNames(styles.navBar)}>
      <div className={classNames(styles["menu-header__logo"])}>
        {/*<BookmarkBorderOutlinedIcon sx={{ color: "#7B6EF6" }} />*/}
        <img
          className={classNames(styles.bookmark)}
          src="/bookmark.svg"
          alt="bookmark"
        />
      </div>
      <div className={classNames(styles.menuHeaderMenu)}>
        <div className={classNames(styles["menu-header__search"])}>
          <a className={classNames(styles["text"])} href="#">
            Поиск фильмов
          </a>
        </div>
        <div className={classNames(styles["menu-header__films"])}>
          <a className={classNames(styles["text"])} href="#">
            Мои фильмы
          </a>
        </div>
        {isAuth && (
          <div className={classNames(styles["menu-header__user"])}>
            <a className={classNames(styles["text"])} href={"#"}>
              {user}
            </a>
            <img src={"/user.svg"} alt={"user"} />
          </div>
        )}
        {isAuth ? (
          <div className={classNames(styles["menu-header__logout"])}>
            <a
              className={classNames(styles["text"])}
              href={"#"}
              onClick={logout}
            >
              Выйти
            </a>
          </div>
        ) : (
          <div className={classNames(styles.menuHeaderLogin)}>
            <a className={classNames(styles["text"])} href={"#"}>
              Войти
            </a>
            <img src={"/login.svg"} alt={"login"} />
          </div>
        )}
      </div>
    </header>
  );
}

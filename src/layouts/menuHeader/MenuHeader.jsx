// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LoginIcon from "@mui/icons-material/Login";
import classNames from "classnames";
import styles from "./menuHeader.module.css";

export function MenuHeader() {
  return (
    <header className={classNames(styles.navBar)}>
      <div className="menu-header__logo">
        {/*<BookmarkBorderOutlinedIcon sx={{ color: "#7B6EF6" }} />*/}
        <img
          className={classNames(styles.bookmark)}
          src="/bookmark.svg"
          alt="bookmark"
        />
      </div>
      <div className={classNames(styles.menuHeaderMenu)}>
        <div className="menu-header__search">
          <a href="#">Поиск фильмов</a>
        </div>
        <div className="menu-header__films">
          <a href="#">Мои фильмы</a>
        </div>
        <div className={classNames(styles.menuHeaderLogin)}>
          <a href={"#"}>Войти</a>
          <LoginIcon sx={{ color: "#A8AEBF" }} />
        </div>
      </div>
    </header>
  );
}

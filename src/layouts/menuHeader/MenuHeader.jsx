// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import classNames from "classnames";
import styles from "./menuHeader.module.css";

export function MenuHeader() {
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
          <a href="#">Поиск фильмов</a>
        </div>
        <div className={classNames(styles["menu-header__films"])}>
          <a href="#">Мои фильмы</a>
        </div>
        <div className={classNames(styles.menuHeaderLogin)}>
          <a href={"#"}>Войти</a>
          <img src={"/login.svg"} alt={"login"} />
        </div>
      </div>
    </header>
  );
}

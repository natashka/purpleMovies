import styles from "./card.module.css";
export function Card({ title, image, rating }) {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card-poster"]}>
        <img src={image} alt={"poster"} />
        <div className={styles["card-rating"]}>
          <img src={"/star.svg"} alt={"rating-icon"} />
          <p>{rating}</p>
        </div>
      </div>

      <div className={styles["info-container"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["like-container"]}>
          <img className={styles["like"]} src={"/like.svg"} alt={"like-icon"} />
          <p>В избранное</p>
        </div>
      </div>
    </div>
  );
}

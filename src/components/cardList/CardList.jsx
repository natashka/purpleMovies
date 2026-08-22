import { moviesList } from "../../assets/data/moviesList.js";
import { Card } from "../card/Card.jsx";
import styles from "./cardList.module.css";

export function CardList() {
  return (
    <div className={styles.films}>
      {moviesList.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
}

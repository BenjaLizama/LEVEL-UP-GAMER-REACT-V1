import React from "react";
import styles from "../../styles/Review.module.css";
import SimpleIcon from "../atoms/SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";

export default function Review({ autor = "", puntuation = 0, review = "" }) {
  const paintedStar = (
    <SimpleIcon icon={ICONS_SOLID.star} color={"#ebaf0aff"} />
  );

  const noPaintedStar = (
    <SimpleIcon icon={ICONS_SOLID.star} color={"#cfcfcfff"} />
  );

  const maxStars = 5;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.autor}>{autor}</span>
        <span className={styles.puntuationContainer}>
          <div className={styles.icon}>
            {Array.from({ length: maxStars }).map((_, index) =>
              index < puntuation ? paintedStar : noPaintedStar
            )}
          </div>
          <div className={styles.puntuation}>{puntuation}</div>
        </span>
      </div>
      <div className={styles.review}>{review}</div>
    </div>
  );
}

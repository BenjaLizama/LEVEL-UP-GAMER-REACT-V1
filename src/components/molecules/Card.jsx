import React from "react";
import styles from "../../styles/Card.module.css";
export default function Card({ CardTitle, CardDescription, CardImage }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={CardImage} alt="Imagen de la guia" />
      <h2 className={styles.title}>{CardTitle}</h2>
      <p className={styles.desc}>{CardDescription}</p>
    </div>
  );
}

import React from "react";
import styles from "../../styles/Guia.module.css";
export default function Guia({ CardTitle, CardDescription, CardImage }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img className={styles.img} src={CardImage} />
        <p className={styles.desc}>{CardDescription}</p>
      </div>
      <h2 className={styles.title}>{CardTitle}</h2>
    </div>
  );
}

import React from "react";
import styles from "../../styles/Card.module.css";
export default function Card({ CardTitle, CardDescription, CardImage }) {
  return (
    <div className={styles.card}>
      <div className={styles.img} style={{ "--img-bg": `url(${CardImage})` }}>
        <p className={styles.desc}>{CardDescription}</p>
      </div>
      <h2 className={styles.title}>{CardTitle}</h2>
    </div>
  );
}

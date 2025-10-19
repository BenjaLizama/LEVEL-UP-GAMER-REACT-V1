import React from "react";
import styles from "../../styles/VoteCard.module.css";
import Button from "../atoms/Button";

export default function VoteCard({ gameImage, name }) {
  return (
    <div className={styles.container}>
      <img
        src={gameImage}
        alt="Imagen del videojuego"
        className={styles.image}
      />
      <span className={styles.title}>{name}</span>
      <div className={styles.containerButton}>
        <Button text={"Votar"} />
      </div>
    </div>
  );
}

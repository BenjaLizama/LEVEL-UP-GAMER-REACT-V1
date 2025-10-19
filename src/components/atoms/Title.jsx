import React from "react";
import styles from "../../styles/Title.module.css";

export default function Title({ text }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{text}</span>
    </div>
  );
}

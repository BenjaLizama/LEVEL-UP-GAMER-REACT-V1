import React, { useState } from "react";
import styles from "../../styles/Carousel.module.css";
import SimpleIcon from "../atoms/SimpleIcon";

export default function Carousel({ listImages = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % listImages.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + listImages.length) % listImages.length);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={prev}>
        <SimpleIcon icon={"icono prev aqui"} />
      </button>

      <div className={styles.carousel}>
        <img
          src={listImages[index]}
          alt={`Imagen ${index + 1}`}
          className={styles.image}
        />
      </div>

      <button className={styles.btn} onClick={next}>
        <SimpleIcon icon={"icono next aqui"} />
      </button>
    </div>
  );
}

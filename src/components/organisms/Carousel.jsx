import React from "react";
import styles from "../../styles/Carousel.module.css";
import SimpleIcon from "../atoms/SimpleIcon";

export default function Carousel() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <SimpleIcon icon={"icono next aqui"} />
      </button>
      <div className={styles.carousel}>
        {/* Debe contener las imagenes dentro de un contenedor slide */}
      </div>
      <button className={styles.btn}>
        <SimpleIcon icon={"icono prev aqui"} />
      </button>
    </div>
  );
}

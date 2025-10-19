import React, { useState } from "react";
import styles from "../../styles/Carousel.module.css";
import SimpleIcon from "../atoms/SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";

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
      <button className={styles.btnPrev} onClick={prev}>
        <SimpleIcon icon={ICONS_SOLID.prev} className={styles.icon} />
      </button>

      <div className={styles.carousel}>
        <div
          className={styles.slideContainer}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {listImages.map((img, i) => (
            <img key={i} src={img} alt={`Imagen ${i + 1}`} />
          ))}
        </div>
      </div>

      <button className={styles.btnNext} onClick={next}>
        <SimpleIcon icon={ICONS_SOLID.next} />
      </button>
    </div>
  );
}

import React from "react";
import styles from "../../styles/Map.module.css";

export default function Map({ mapa }) {
  return (
    <div>
      <iframe
        className={styles.mapa}
        src={mapa}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

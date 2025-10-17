import React from "react";
import styles from "../../styles/ShareBar.module.css";
import PublicationButton from "../atoms/PublicationButton";
import { ICONS_SOLID } from "../../assets/utils/icons";

export default function ShareBar() {
  return (
    <div className={styles.container}>
      <PublicationButton icon={ICONS_SOLID.compartir} colorHover={"#ff0000"} />
    </div>
  );
}

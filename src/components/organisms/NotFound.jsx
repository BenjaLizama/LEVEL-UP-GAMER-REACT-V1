import React from "react";

import styles from "../../styles/NotFound.module.css";
import { useNavigate } from "react-router-dom";
import SimpleIcon from "../atoms/SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <SimpleIcon
        icon={ICONS_SOLID.sad}
        size={12}
        color={"var(--color-texto-secundario)"}
      />
      <h1>404: NotFound</h1>
      <h2>
        Ups no se encuentra la pagina...
        <a href={"/"}>Volver a inicio</a>
      </h2>
    </div>
  );
}

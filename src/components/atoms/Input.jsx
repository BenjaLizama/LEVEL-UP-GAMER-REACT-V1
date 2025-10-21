import React, { useState } from "react";
import styles from "../../styles/Input.module.css";
import SimpleIcon from "./SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";

export default function Input({ label, icon }) {
  const [textoInput, setTextoInput] = useState("");

  const handleInputOnChange = (evento) => {
    setTextoInput(evento.target.value);
  };

  const cleanInput = () => {
    setTextoInput("");
  };

  if (!icon) {
    var style = { padding: "1rem 3rem 1rem 1rem" };
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={textoInput}
          onChange={handleInputOnChange}
          style={style}
        />
        {icon ? (
          <div className={styles.icon}>
            <SimpleIcon
              icon={icon}
              color={"var(--color-texto-principal)"}
              size={1.2}
            />
          </div>
        ) : null}
        {textoInput ? (
          <button className={styles.inputButton} onClick={cleanInput}>
            <SimpleIcon
              icon={ICONS_SOLID.xmark}
              color={"var(--color-texto-principal)"}
              size={1.2}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
}

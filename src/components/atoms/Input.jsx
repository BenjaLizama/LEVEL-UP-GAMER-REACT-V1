import React, { useState } from "react";
import styles from "../../styles/Input.module.css";
import SimpleIcon from "./SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";

export default function Input({ label, icon, type = "text" }) {
  const [textoInput, setTextoInput] = useState("");

  const [typeInput, setTypeInput] = useState(type);

  const handleInputOnChange = (evento) => {
    setTextoInput(evento.target.value);
  };

  const cleanInput = () => {
    setTextoInput("");
  };

  const showPassword = () => {
    // Esto ya estaba correcto
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };

  const style = !icon ? { padding: "1rem 3rem 1rem 1rem" } : undefined;

  let buttonContent = null;

  if (type === "password" && textoInput) {
    buttonContent = (
      <button
        type="button"
        className={styles.inputButton}
        onClick={showPassword}
      >
        <SimpleIcon
          icon={
            typeInput === "password" ? ICONS_SOLID.mostrar : ICONS_SOLID.ocultar
          }
          color={"var(--color-texto-principal)"}
          size={1.2}
        />
      </button>
    );
  } else if (type !== "password" && textoInput) {
    buttonContent = (
      <button type="button" className={styles.inputButton} onClick={cleanInput}>
        <SimpleIcon
          icon={ICONS_SOLID.xmark}
          color={"var(--color-texto-principal)"}
          size={1.2}
        />
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.inputContainer}>
        <input
          type={typeInput}
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

        {buttonContent}
      </div>
    </div>
  );
}

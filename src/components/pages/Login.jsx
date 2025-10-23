import React from "react";
import styles from "../../styles/Login.module.css";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>
          LEVEL-UP <br />
          GAMER
        </span>
        <img src="/images/Level-Up.png" alt="Logo LEVEL-UP GAMER" />
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Iniciar sesion</span>
        <span className={styles.subTitle}>¡Bienvenido nuevamente!</span>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <Input label={"Email"} icon={ICONS_SOLID.email} />
          <Input label={"Contraseña"} icon={ICONS_SOLID.lock} type="password" />

          <span className={styles.forgetPassword}>
            ¿No tienes cuenta?
            <Link to={"/create-account"}>
              <span>Crear cuenta</span>
            </Link>
          </span>
          <Button text={"Iniciar sesión"} />
        </form>
      </div>
    </div>
  );
}

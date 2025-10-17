import styles from "../../styles/ProfileSettingsTop.module.css";
import { ICONS_SOLID } from "../../assets/utils/icons";
import Button from "../atoms/Button";
import SimpleIcon from "../atoms/SimpleIcon";

export default function ProfileSettingsTop() {
  return (
    <div className={styles.container}>
      <SimpleIcon icon={ICONS_SOLID.usuario} size={"6"} />
      <h1>¡Bienvenido!</h1>
      <span className={styles.spanText}>
        ¡Los usuarios que han iniciado sesión pueden hacer más! Inicia sesión
        ahora!
      </span>
      <div className={styles.containerButton}>
        <Button className={styles.button} text={"Iniciar Sesión"} />
      </div>
    </div>
  );
}

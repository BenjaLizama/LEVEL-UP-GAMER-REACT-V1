import styles from "../../styles/ProfileSettingsTop.module.css";
import { ICONS_SOLID } from "../../assets/utils/icons";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

export default function ProfileSettingsTop() {
  return (
    <div className={styles.container}>
      <Icon icon={ICONS_SOLID.usuario} size={"120"} />
      <h1>¡Bienvenido!</h1>
      <span>
        ¡Los usuarios que han iniciado sesión pueden hacer más! Inicia sesión
        ahora!
      </span>
      <div className={styles.containerButton}>
        <Button text={"Iniciar Sesión"} />
      </div>
    </div>
  );
}

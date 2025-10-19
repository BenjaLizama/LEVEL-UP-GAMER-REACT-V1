import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/SimpleIcon.module.css";

export default function SimpleIcon({ icon, size, color }) {
  return (
    <FontAwesomeIcon
      className={styles.iconShadow}
      icon={icon}
      style={{ fontSize: `${size}rem`, color }}
    />
  );
}

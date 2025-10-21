import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/SimpleIcon.module.css";

export default function SimpleIcon({ icon, size, color, boolShadow }) {
  if (boolShadow == true) {
    var active = styles.iconShadow;
  } else {
    var active = null;
  }
  return (
    <FontAwesomeIcon
      className={active}
      icon={icon}
      style={{ fontSize: `${size}rem`, color }}
    />
  );
}

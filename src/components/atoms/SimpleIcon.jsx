import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/SimpleIcon.module.css";

export default function SimpleIcon({ icon, size, color, boolShadow }) {
  let active = "";

  if (boolShadow == true) {
    let active = styles.iconShadow;
  } else {
    let active = null;
  }
  return (
    <FontAwesomeIcon
      className={active}
      icon={icon}
      style={{ fontSize: `${size}rem`, color }}
    />
  );
}

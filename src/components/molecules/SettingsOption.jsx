import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Settings.module.css";

export default function SettingsOption({ text, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <span>{text}</span>
      </div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

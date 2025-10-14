import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/Option.module.css";

export default function Option({ text, route }) {
  return (
    <div>
      <Link to={route} className={styles.container}>
        <span className={styles.text}>{text}</span>
        <FontAwesomeIcon icon={ICONS_SOLID.link} />
      </Link>
    </div>
  );
}

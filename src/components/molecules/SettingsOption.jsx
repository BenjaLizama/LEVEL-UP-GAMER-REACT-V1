import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/SettingsOption.module.css";
import { useState } from "react";

export default function SettingsOption({ text, icon, children }) {
  const [open, setOpen] = useState(false);

  if (open) {
    var content = <div className={styles.content}>{children}</div>;
  } else {
    var content = <div></div>;
  }

  return (
    <>
      <div
        className={`${styles.container} ${open ? styles.active : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.settings}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          <span>{text}</span>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      {content}
    </>
  );
}

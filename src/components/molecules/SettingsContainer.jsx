import styles from "../../styles/SettingsContainer.module.css";

export default function SettingsContainer({ children, text }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{text}</span>
      {children}
    </div>
  );
}

import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className={styles.container}>
        <p className={styles.text}>
          Desarrollado por <span>Benjamín Lizama</span> y{" "}
          <span>Lucciano Martinez</span> © 2025
        </p>
      </div>
    </div>
  );
}

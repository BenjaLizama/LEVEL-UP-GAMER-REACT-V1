import styles from "../../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.navContainer}>
        <h1 className={styles.bannerTitle}>
          LEVEL-UP
          <br />
          GAMER
        </h1>
        <nav className={styles.navigation}>
          <span className={styles.navText}>Inicio</span>
          <span className={styles.navText}>Marketplace</span>
          <span className={styles.navText}>Carrito</span>
          <span className={styles.navText}>Mi Cuenta</span>
        </nav>
        <img
          src="../../../public/images/Level-Up.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
}

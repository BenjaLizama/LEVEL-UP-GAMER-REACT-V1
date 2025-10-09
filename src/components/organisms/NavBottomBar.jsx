import { Link } from "react-router-dom";
import Icon from "../atoms/Icon";
import { ICONS_SOLID, ICONS_REGULAR } from "../../assets/utils/icons";
import styles from "../../styles/NavBottomBar.module.css";

export default function NavBottomBar() {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={styles.navButton}>
        <Icon icon={ICONS_SOLID.home} />
        <span>Inicio</span>
      </Link>
      <Link to={"/marketplace"} className={styles.navButton}>
        <Icon icon={ICONS_SOLID.shop} />
        <span>Marketplace</span>
      </Link>
      <Link to={"/cart"} className={styles.navButton}>
        <Icon icon={ICONS_SOLID.cart} />
        <span>Carrito</span>
      </Link>
      <Link to={"/profile"} className={styles.navButton}>
        <Icon icon={ICONS_SOLID.usuario} />
        <span>Mi Perfil</span>
      </Link>
    </nav>
  );
}

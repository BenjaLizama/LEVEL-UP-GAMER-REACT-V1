import { Link, useLocation } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/NavBottomBar.module.css";
import SimpleIcon from "../atoms/SimpleIcon";

export default function NavBottomBar() {
  const location = useLocation();

  const links = [
    { path: "/", icon: ICONS_SOLID.home, label: "Inicio" },
    { path: "/marketplace", icon: ICONS_SOLID.shop, label: "Marketplace" },
    { path: "/cart", icon: ICONS_SOLID.cart, label: "Carrito" },
    { path: "/profile", icon: ICONS_SOLID.usuario, label: "Mi Perfil" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => {
        const isActive =
          link.path === "/"
            ? location.pathname === link.path
            : location.pathname.startsWith(link.path);

        return (
          <Link
            key={index}
            to={link.path}
            className={isActive ? styles.selected : styles.navButton}
          >
            <SimpleIcon icon={link.icon} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

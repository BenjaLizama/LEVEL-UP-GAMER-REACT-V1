import { Link } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/NavBottomBar.module.css";
import { useState } from "react";
import SimpleIcon from "../atoms/SimpleIcon";

export default function NavBottomBar() {
  const [selected, setSelected] = useState(0);

  const links = [
    { path: "/", icon: ICONS_SOLID.home, label: "Inicio" },
    { path: "/marketplace", icon: ICONS_SOLID.shop, label: "Marketplace" },
    { path: "/cart", icon: ICONS_SOLID.cart, label: "Carrito" },
    { path: "/profile", icon: ICONS_SOLID.usuario, label: "Mi Perfil" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={selected === index ? styles.selected : styles.navButton}
          onClick={() => setSelected(index)}
        >
          <SimpleIcon icon={link.icon} />
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}

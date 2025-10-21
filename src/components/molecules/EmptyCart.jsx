import React from "react";
import styles from "../../styles/EmptyCart.module.css";
import SimpleIcon from "../atoms/SimpleIcon";
import { ICONS_SOLID } from "../../assets/utils/icons";
export default function EmptyCart() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title1}>Carrito de compras</h1>
      <div className={styles.contenido}>
        <SimpleIcon
          className={styles.icono}
          icon={ICONS_SOLID.empty}
          size={8}
          color={"#ffffff"}
        />
        <div className={styles.info}>
          <h2 className={styles.title2}>¡Agrega tus productos!</h2>
          <p>aun no tienese poroductos en tu carrito... </p>
          <a href="#">abrir tienda</a>
        </div>
      </div>
    </div>
  );
}

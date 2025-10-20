import React from "react";
import styles from "../../styles/ProductScreen.module.css";
import { Link } from "react-router-dom";
import SimpleIcon from "../atoms/SimpleIcon";
import { useParams } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";
import SettingsOption from "../molecules/SettingsOption";

export default function ProductScreen() {
  const { id } = useParams();
  const classNameStyles = [styles.arrowIcon, styles.settingOption];

  return (
    <div className={styles.main}>
      <Link to="/marketplace" className={styles.prev}>
        <SimpleIcon icon={ICONS_SOLID.prev} size={1} />
        <span className={styles.prevText}>Tienda</span>
      </Link>
      <div className={styles.container}>
        <div className={styles.arrive}>
          <span className={styles.arriveText}>LLEGA HOY</span>
        </div>
        <div className={styles.info}>
          <span className={styles.pName}>Nombre del producto</span>
          <span className={styles.pOwner}>Vendedor</span>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="../../../public/images/NoImage.webp"
            alt="Imagen del producto"
            className={styles.img}
          />
        </div>
        <div className={styles.pricesContainer}>
          <div className={styles.textParallel}>
            <span className={styles.nText}>Normal</span>
            <span className={styles.oldPrice}>$0</span>
          </div>
          <div className={styles.textParallel}>
            <span className={styles.nText}>Descuento</span>
            <span className={styles.desctPerc}>0% DCTO.</span>
          </div>
          <div className={styles.textParallel}>
            <span className={styles.finalPrice}>Pago con transferencia</span>
            <span className={styles.finalPrice}>$0</span>
          </div>
          <div className={styles.stockContainer}>
            <div className={styles.align}>
              <SimpleIcon
                icon={ICONS_SOLID.cart}
                color={"var(--color-texto-principal)"}
              />
              <span className={styles.stockText}>Stock disponible</span>
            </div>
            <span className={styles.stock}>Más de {20} unidades</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.buttonSecondary}>Agregar al carro</button>
            <button className={styles.buttonPrimary}>Comprar ahora</button>
          </div>
        </div>
        <div className={styles.containerDescription}>
          <SettingsOption className={styles.test} text={"Descripción"}>
            <div className={styles.description}>
              <span className={styles.descriptionTitle}>
                Nombre del producto
              </span>
              <span className={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                vitae ut, accusamus corrupti temporibus minus laudantium velit
                vel inventore nemo! Nesciunt, eum quibusdam. Impedit aliquam
                voluptas veniam tempore enim voluptatum totam pariatur deleniti
                quo. Id consequuntur doloribus autem nostrum vero!
              </span>
            </div>
          </SettingsOption>
        </div>
      </div>
    </div>
  );
}

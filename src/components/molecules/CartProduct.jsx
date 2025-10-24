import React from "react";
import styles from "../../styles/CartProduct.module.css";

export default function CartProduct({
  productName,
  image,
  price,
  anotherPaymentMethod,
  quantity,
  onClick,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{productName}</span>
      <div className={styles.secondContainer}>
        <div className={styles.imgContainer}>
          <img src={image} alt="Imagen del producto" className={styles.image} />
          <span className={styles.delete} onClick={onClick}>
            Eliminar
          </span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.spaceBetween}>
            <span className={styles.transferPriceTxt}>
              Precio transferencias
            </span>
            <span className={styles.transferPriceTxt}>{price}</span>
          </div>
          {/*<div className={styles.spaceBetween}>
            <span>Otros medios de pago</span>
            <span>{anotherPaymentMethod}</span>
          </div> */}
          <span className={styles.quantityText}>Cantidad: {quantity}</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../../styles/CartProduct.module.css";

export default function CartProduct({
  productName,
  imgProduct,
  transferPrice,
  anotherPaymentMethod,
  quantity,
  onClick,
}) {
  const product = {
    productName: "Xbox",
    imgProduct: "/images/Noticia1.jpg",
    transferPrice: 60000,
    normalPrice: 70000,
    anotherPaymentMethod: 60000 + 3500,
    quantity: 3,
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>{productName}</span>
      <div className={styles.secondContainer}>
        <div className={styles.imgContainer}>
          <img
            src={imgProduct}
            alt="Imagen del producto"
            className={styles.image}
          />
          <span className={styles.delete} onClick={onClick}>
            Eliminar
          </span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.spaceBetween}>
            <span className={styles.transferPriceTxt}>
              Precio transferencias
            </span>
            <span className={styles.transferPriceTxt}>{transferPrice}</span>
          </div>
          <div className={styles.spaceBetween}>
            <span>Otros medios de pago</span>
            <span>{anotherPaymentMethod}</span>
          </div>
          <span className={styles.quantityText}>Cantidad: {quantity}</span>
        </div>
      </div>
    </div>
  );
}

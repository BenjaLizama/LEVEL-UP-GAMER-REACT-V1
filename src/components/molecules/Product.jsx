import { Link } from "react-router-dom";
import styles from "../../styles/Product.module.css";

export default function Product({
  id = null,
  sealer = "Vendedor",
  productName = "Nombre del producto",
  price = 0,
  discountPer = 0,
  boolDesct = false,
}) {
  let priceDscto = 0;
  let finalPrice = price;

  if (boolDesct && discountPer > 0 && discountPer < 100) {
    priceDscto = price * (discountPer / 100);
    finalPrice = price - priceDscto;
  }

  return (
    <Link to={`/product/${id}`} className={styles.Link}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src="/images/NoImage.webp"
            alt="Imagen del producto"
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <span className={styles.pOwner}>{sealer}</span>
          <span className={styles.pName}>{productName}</span>
          <div className={styles.pDiscount}>
            {boolDesct ? (
              <>
                <span className={styles.priceDiscount}>
                  {discountPer}% DCTO.
                </span>
                <span className={styles.priceThrough}>${price}</span>
              </>
            ) : (
              <>&nbsp;</>
            )}
          </div>
          <span className={styles.pCuotes}></span>
          <span className={styles.pPrice}>${finalPrice}</span>
        </div>
      </div>
    </Link>
  );
}

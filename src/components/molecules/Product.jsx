import { Link } from "react-router-dom";
import styles from "../../styles/Product.module.css";
import { formatoCLP } from "../../assets/utils/format";

export default function Product({
  id = null,
  sealer = "Vendedor",
  productName = "Nombre del producto",
  price = 0,
  discountPer = 0,
  image = "/images/NoImage.webp",
  precioFinal,
}) {
  let priceDscto = 0;
  let finalPrice = price;

  if (discountPer > 0 && discountPer < 100) {
    priceDscto = price * (discountPer / 100);
    finalPrice = price - priceDscto;
  }

  return (
    <Link to={`/product/${id}`} className={styles.Link}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={image} alt="Imagen del producto" className={styles.img} />
        </div>
        <div className={styles.info}>
          <span className={styles.pOwner}>{sealer}</span>
          <span className={styles.pName}>{productName}</span>
          <div className={styles.pDiscount}>
            {discountPer > 0 && discountPer < 100 ? (
              <>
                <span className={styles.priceDiscount}>
                  {discountPer}% DCTO.
                </span>
                <span className={styles.priceThrough}>{formatoCLP(price)}</span>
              </>
            ) : (
              <>&nbsp;</>
            )}
          </div>
          <span className={styles.pCuotes}></span>
          <span className={styles.pPrice}>{formatoCLP(finalPrice)}</span>
        </div>
      </div>
    </Link>
  );
}

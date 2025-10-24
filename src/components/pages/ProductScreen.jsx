/* Esta pagina debe ser migrada a componentes para la tercera prueba o el examen
 * porque no cumple con los principios de Atomic Design, pero por temas de tiempo
 * se tiene que quedar asi
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/ProductScreen.module.css";
import { href, Link } from "react-router-dom";
import SimpleIcon from "../atoms/SimpleIcon";
import { useParams } from "react-router-dom";
import { ICONS_SOLID } from "../../assets/utils/icons";
import SettingsOption from "../molecules/SettingsOption";
import Footer from "../organisms/Footer";
import { PRODUCT_DATA } from "../data/ProductData";
import { formatoCLP } from "../../assets/utils/format";
import ReviewTemplate from "../template/ReviewTemplate";
import { agregar_prod } from "../../assets/utils/cart";
import { calc_total } from "../../assets/utils/cart";
import { eliminar_prod } from "../../assets/utils/cart";
export default function ProductScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const irAPagina = () => {
    navigate("/cart");
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const product = PRODUCT_DATA.find((p) => p.id === id);

  if (!product) {
    return (
      <div className={styles.notFound}>
        {/* Crear 404 not found para esto */}
        <h1>Producto no encontrado</h1>
      </div>
    );
  }
  const add = (producto) => {
    const actualizar = agregar_prod(producto);
    console.log("se agrego el producto", actualizar);
  };

  const sealer = product.sealer;
  const productName = product.productName;
  const price = product.price;
  const discountPer = product.discountPer;
  const description = product.description;
  const categorie = product.categorie;
  var image = product.image || "/images/NoImage.webp";
  var finalPrice;

  const filterDiscount = discountPer > 0 && discountPer < 100;

  if (filterDiscount) {
    var finalPrice = Math.round(price - (price * discountPer) / 100);
    var finalTransferPrice =
      Math.round(price - (price * discountPer) / 100) - 3500;
  } else {
    var finalTransferPrice = price - 3500;
    var finalPrice = price;
  }

  if (filterDiscount) {
    var discount = (
      <>
        <div className={styles.textParallel}>
          <span className={styles.nText}>Normal</span>
          <span className={styles.oldPrice}>{formatoCLP(price)}</span>
        </div>
        <div className={styles.textParallel}>
          <span className={styles.nText}>Descuento</span>
          <span className={styles.desctPerc}>{discountPer}% DCTO.</span>
        </div>
        <div className={styles.textParallel}>
          <span className={styles.finalPrice}>Pago con transferencia</span>
          <span className={styles.finalPrice}>
            {formatoCLP(finalTransferPrice)}
          </span>
        </div>
        <div className={styles.textParallel}>
          <span className={styles.finalNormalPrice}>Pago normal</span>
          <span className={styles.finalNormalPrice}>
            {formatoCLP(finalPrice)}
          </span>
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
          <button
            className={styles.buttonSecondary}
            onClick={() => add(product)}
          >
            Agregar al carro
          </button>
          <button
            className={styles.buttonPrimary}
            onClick={() => {
              add(product);
              navigate("/cart");
            }}
          >
            Comprar ahora
          </button>
        </div>
      </>
    );
  } else {
    var discount = (
      <>
        <div className={styles.textParallel}>
          <span className={styles.finalPrice}>Pago con transferencia</span>
          <span className={styles.finalPrice}>
            {formatoCLP(finalTransferPrice)}
          </span>
        </div>
        <div className={styles.textParallel}>
          <span className={styles.finalNormalPrice}>Otros medios de pago</span>
          <span className={styles.finalNormalPrice}>
            {formatoCLP(finalPrice)}
          </span>
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
          <button
            className={styles.buttonSecondary}
            onClick={() => add(product)}
          >
            Agregar al carro
          </button>
          <button
            className={styles.buttonPrimary}
            onClick={() => {
              add(product);
              navigate("/cart");
            }}
          >
            Comprar ahora
          </button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.prev}>
        <Link to="/marketplace" className={styles.Link}>
          <SimpleIcon icon={ICONS_SOLID.prev} size={1} />
          <span className={styles.prevText}>Tienda</span>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.arrive}>
          <span className={styles.arriveText}>LLEGA HOY</span>
        </div>
        <div className={styles.info}>
          <span className={styles.pName}>{productName}</span>
          <span className={styles.pOwner}>{sealer}</span>
        </div>
        <div className={styles.imgContainer}>
          <img src={image} alt="Imagen del producto" className={styles.img} />
        </div>
        <div className={styles.pricesContainer}>{discount}</div>
        <div className={styles.containerCategorie}>
          <span className={styles.categorieText}>Categoria:</span>
          <span className={styles.categorie}>{categorie}</span>
        </div>
        <div className={styles.containerDescription}>
          <SettingsOption className={styles.test} text={"Descripción"}>
            <div className={styles.description}>
              <span className={styles.descriptionTitle}>{productName}</span>
              <span className={styles.descriptionText}>{description}</span>
            </div>
          </SettingsOption>
          <SettingsOption className={styles.test} text={"Reseñas"}>
            <ReviewTemplate id={product.id} />
          </SettingsOption>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

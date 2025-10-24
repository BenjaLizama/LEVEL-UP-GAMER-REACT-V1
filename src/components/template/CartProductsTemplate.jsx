import React, { useState, useEffect } from "react";
import {
  obtener_datos,
  eliminar_prod,
  calc_total,
} from "../../assets/utils/cart";
import EmptyCart from "../molecules/EmptyCart";
import { formatoCLP } from "../../assets/utils/format";
import CartProduct from "../molecules/CartProduct";
import styles from "../../styles/CartProductsTemplate.module.css";
/* productName,
  imgProduct,
  transferPrice,
  anotherPaymentMethod,
  quantity,
  onClick,*/
export default function CartProductsTemplate() {
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    setCarrito(obtener_datos());
  }, []);
  const eliminar = (id) => {
    eliminar_prod(id);
    setCarrito(obtener_datos());
  };
  if (carrito.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div>
        <span className={styles.total}>
          Total: {formatoCLP(calc_total(carrito))}
        </span>
      </div>
      <div>
        {carrito.map((producto) => (
          <CartProduct
            key={producto.id}
            {...producto}
            price={formatoCLP(producto.precioFinal)}
            onClick={() => eliminar(producto.id)}
          />
        ))}
      </div>
    </div>
  );
}

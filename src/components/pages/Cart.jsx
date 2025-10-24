import React, { useState, useEffect } from "react";
import EmptyCart from "../molecules/EmptyCart";
import CartProductsTemplate from "../template/CartProductsTemplate"; // importa tu componente

export default function Cart() {
  const [carritoVacio, setCarritoVacio] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCarritoVacio(cart.length === 0);
  }, []);

  return (
    <div>
      {carritoVacio ? (
        <EmptyCart />
      ) : (
        <CartProductsTemplate /> // <-- Aquí llamas a tu componente
      )}
    </div>
  );
}

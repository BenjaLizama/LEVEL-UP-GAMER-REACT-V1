import { data } from "react-router-dom";

export function agregar_prod(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existe = cart.find((item) => item.id === product.id);

  if (existe) {
    existe.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      nombre: product.productName,
      price: product.price,
      quantity: 1,
      descuento: product.discountPer,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function eliminar_prod(product) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const producto = cart.find((p) => p.id === product.id);
  if (producto) {
    cart = cart.filter((p) => p.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("no se encontro");
  }
}

export function calc_total() {
  const lista_prods = localStorage.getItem("cart") || [];
  const data = JSON.parse(lista_prods);
  const total = data.reduce(
    (acumulador, product) =>
      acumulador +
      Math.round(product.price - product.price * (product.descuento / 100)) *
        product.quantity,
    0
  );
  console.log("total", total);
  return total;
}

export function comprar() {
  localStorage.removeItem("cart");
}

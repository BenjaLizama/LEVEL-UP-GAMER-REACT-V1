import { data } from "react-router-dom";
import { PRODUCT_DATA } from "../../components/data/ProductData";
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
      Math.round(
        (product.price - product.price * (product.descuento / 100)) *
          product.quantity
      ),
    0
  );
  console.log("total", total);
  return total;
}

export function comprar() {
  localStorage.removeItem("cart");
}

export function obtener_datos() {
  const cart = localStorage.getItem("cart");
  if (!cart) return [];
  const data = JSON.parse(cart);
  if (!Array.isArray(data) || data.length === 0) return [];
  let id_productos = data.map((product) => product.id);
  const productos_carrito = PRODUCT_DATA.filter((product) =>
    id_productos.includes(product.id)
  ).map((product) => {
    const item = data.find((p) => p.id === product.id);
    return { ...product, quantity: item.quantity };
  });
  localStorage.setItem(JSON.stringify("cart2", productos_carrito));
  return productos_carrito;
}

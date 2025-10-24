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
      price: product.price - 3500,
      quantity: 1,
      descuento: product.discountPer,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function eliminar_prod(productid) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const producto = cart.find((p) => p.id === productid);
  if (producto) {
    producto.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    if (producto.quantity <= 0) {
      let lista_nueva = cart.filter((p) => p.id !== productid);
      localStorage.setItem("cart", JSON.stringify(lista_nueva));
      console.log("si esta");
    }
  } else {
    console.log("no se encontro");
  }
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
    const precioFinal =
      product.discountPer > 0 && product.discountPer < 100
        ? (product.price - product.price * (product.discountPer / 100)) *
          item.quantity
        : product.price * item.quantity;
    return {
      ...product,
      quantity: item.quantity,
      precioFinal: precioFinal,
    };
  });
  localStorage.setItem("cart2", JSON.stringify(productos_carrito));
  return productos_carrito;
}

export function calc_total() {
  const lista_prods = localStorage.getItem("cart2");
  const data = lista_prods ? JSON.parse(lista_prods) : [];

  const total = data.reduce(
    (acumulador, product) => acumulador + (product.precioFinal || 0),
    0
  );

  return total;
}

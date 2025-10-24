import React from "react";

export default function CartProductsTemplate() {
  var localStorageCart = JSON.parse(localStorage.getItem("cart"));

  console.log(localStorageCart);

  return <div>Hola JSON</div>;
}

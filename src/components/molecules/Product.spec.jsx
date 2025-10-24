import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { MemoryRouter } from "react-router-dom";
import { formatoCLP } from "../../assets/utils/format";

test("renders content", () => {
  // Generamos el producto
  const product = {
    id: "TEST01",
    sealer: "Xbox",
    productName: "Controlador Inalámbrico Xbox Series X",
    price: 59990,
    discountPer: 20,
    image: "/images/ControlXbox.png",
  };

  // Realizamos los mismos calculos que se hacen dentro del componente Product
  const precioDescuento = product.price * (product.discountPer / 100);
  const precioFinal = product.price - precioDescuento;
  const precioFinalFormateado = formatoCLP(precioFinal);
  const precioOriginalFormateado = formatoCLP(product.price);

  // Renderizamos el componente
  const component = render(
    <MemoryRouter>
      <Product {...product} />
    </MemoryRouter>
  );

  // Verificamos que el nombre del producto este dentro del componente renderizado
  const productNameElement = screen.getByText(
    "Controlador Inalámbrico Xbox Series X"
  );
  expect(component.container).toHaveTextContent("Xbox");

  // Verificamos que el precio final formateado este dentro del documento
  const finalPriceElement = screen.getByText(precioFinalFormateado);
  expect(finalPriceElement).toBeInTheDocument();

  // (Si hay descuento) verificamos que el precio original este tachado
  const originalPriceElement = screen.getByText(precioOriginalFormateado);
  expect(originalPriceElement).toBeInTheDocument();
  expect(originalPriceElement).toHaveClass("priceThrough");

  // (Si hay descuento) Verificamos que el pocentaje de descuento este en el documento
  const discountElement = screen.getByText(`${product.discountPer}% DCTO.`);
  expect(discountElement).toBeInTheDocument();
});

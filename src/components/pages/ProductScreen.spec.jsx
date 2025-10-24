import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductosTemplate from "../template/ProductosTemplate";
import { PRODUCT_DATA } from "../data/ProductData";
import { CATEGORIES } from "../../assets/utils/categories";

const findSelectByDisplayValue = (text) => {
  return screen.getByRole("combobox", {
    name: (accessibleName, element) =>
      element.selectedOptions[0].text.includes(text),
  });
};

describe("Renderiza ProductosTemplate", () => {
  // -> Test 1: Renderiza todos los productos <- \\
  test("Renderiza todos los productos", () => {
    render(
      <MemoryRouter>
        <ProductosTemplate />
      </MemoryRouter>
    );

    // Verifica que el título se renderiza
    expect(
      screen.getByText("Encuentra tus productos favoritos")
    ).toBeInTheDocument();

    // Busca todos los elementos que son productos
    let contadorProducto = 0;
    PRODUCT_DATA.forEach((product) => {
      if (screen.queryAllByText(product.productName).length > 0) {
        contadorProducto++;
      }
    });

    // Verifica que se renderiza la misma cantidad de productos que hay en los datos
    expect(contadorProducto).toBe(PRODUCT_DATA.length);
  });

  // -> Test 2: Filtrar por categoria <- \\
  test("Filtra productos por categoria", () => {
    render(
      <MemoryRouter>
        <ProductosTemplate />
      </MemoryRouter>
    );

    // Encuentra el select de categoria
    const categoriaSelect = findSelectByDisplayValue("Filtrar por categoria");
    expect(categoriaSelect).toBeInTheDocument();

    // Simula la seleccion de la categoria "consolas"
    fireEvent.change(categoriaSelect, {
      target: { value: CATEGORIES.consolas },
    });

    // Cuenta cuantos productos de la categoria "consolas" existen
    const expectedCount = PRODUCT_DATA.filter(
      (p) => p.categorie === CATEGORIES.consolas
    ).length;

    // Verifica que solo los productos de esa categoria estan visibles
    PRODUCT_DATA.forEach((product) => {
      const productNameElement = screen.queryByText(product.productName);
      if (product.categorie === CATEGORIES.consolas) {
        expect(productNameElement).toBeInTheDocument(); // Debe estar
      } else {
        expect(productNameElement).not.toBeInTheDocument(); // No debe estar
      }
    });
  });

  // -> Test 3: Filtrar por rango de precios <- \\
  test("Filtra productos por rango de precios", () => {
    render(
      <MemoryRouter>
        <ProductosTemplate />
      </MemoryRouter>
    );

    // Encuentra el select de precios
    const priceSelect = findSelectByDisplayValue("Rango de precios");
    expect(priceSelect).toBeInTheDocument();

    // Simula la seleccion del rango entre 10.001 y 50.000
    const priceRangeValue = JSON.stringify([10001, 50000]);
    fireEvent.change(priceSelect, { target: { value: priceRangeValue } });

    // Filtra los datos manualmente
    const expectedProducts = PRODUCT_DATA.filter((product) => {
      const finalPrice =
        product.discountPer > 0 && product.discountPer < 100
          ? product.price * (1 - product.discountPer / 100)
          : product.price;
      return finalPrice >= 10001 && finalPrice <= 50000;
    });

    // Verifica que solo los productos en ese rango estan visibles
    PRODUCT_DATA.forEach((product) => {
      const productNameElement = screen.queryByText(product.productName);
      const isInExpected = expectedProducts.some((p) => p.id === product.id);
      if (isInExpected) {
        expect(productNameElement).toBeInTheDocument();
      } else {
        expect(productNameElement).not.toBeInTheDocument();
      }
    });
  });
});

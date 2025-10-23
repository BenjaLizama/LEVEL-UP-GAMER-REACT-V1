import React, { useState } from "react";
import styles from "../../styles/ProductosTemplate.module.css";
import Product from "../molecules/Product";
import { PRODUCT_DATA } from "../data/ProductData";
import { CATEGORIES } from "../../assets/utils/categories";

export default function ProductosTemplate({ minPrice, maxPrice }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [priceFilter, setPriceFilter] = useState(JSON.stringify([null, null]));

  const productosFiltrados = PRODUCT_DATA.filter((producto) => {
    const filtroCategoria =
      !categoriaFiltro || producto.categorie === categoriaFiltro;

    const precioFinal =
      producto.discountPer > 0 && producto.discountPer < 100
        ? producto.price * (1 - producto.discountPer / 100)
        : producto.price;

    let rango;
    try {
      rango = JSON.parse(priceFilter);
    } catch (e) {
      rango = [];
    }

    let filtroPrecios = true;

    if (rango.length === 2) {
      const minPrice = rango[0];
      const maxPrice = rango[1];

      const cumpleMin = minPrice === null || precioFinal >= minPrice;
      const cumpleMax = maxPrice === null || precioFinal <= maxPrice;

      filtroPrecios = cumpleMin && cumpleMax;
    }

    return filtroCategoria && filtroPrecios;
  });

  console.log(
    PRODUCT_DATA.map((e, i) => {
      console.log(e.productName);
      console.log(e.price);
      console.log(e.price);
    })
  );

  return (
    <>
      <div className={styles.filtersContainer}>
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
        >
          <option value={""}>Filtrar por categoria</option>
          <option value={CATEGORIES.juego_mesa}>Juegos de mesa</option>
          <option value={CATEGORIES.accesorios}>Accesorios</option>
          <option value={CATEGORIES.consolas}>Consolas</option>
          <option value={CATEGORIES.compu_gamer}>Computadores gamer</option>
          <option value={CATEGORIES.sillas}>Sillas gamer</option>
          <option value={CATEGORIES.mouse}>Mouse</option>
          <option value={CATEGORIES.mousepad}>Mousepad</option>
          <option value={CATEGORIES.poleras_personalizadas}>
            Poleras personalizadas
          </option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => {
            setPriceFilter(e.target.value);
            console.log(priceFilter);
          }}
        >
          <option value={JSON.stringify([null, null])}>Rango de precios</option>
          <option value={JSON.stringify([null, 10000])}>
            Menos de $10.000
          </option>
          <option value={JSON.stringify([10001, 50000])}>
            Entre $10.001 y $50.000
          </option>
          <option value={JSON.stringify([50001, 100000])}>
            Entre $50.001 y $100.000
          </option>
          <option value={JSON.stringify([100001, 250000])}>
            Entre $100.001 y $250.000
          </option>
          <option value={JSON.stringify([250001, 500000])}>
            Entre $250.001 y $500.000
          </option>
          <option value={JSON.stringify([500000, null])}>
            Mas de $500.000
          </option>
        </select>
        <button
          onClick={() => {
            setCategoriaFiltro("");
            setPriceFilter(JSON.stringify([null, null]));
          }}
        >
          Restaurar filtros
        </button>
      </div>
      <div className={styles.container}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((n, i) => (
            <Product
              key={i}
              {...n}
              precioFinal={
                n.discountPer > 0 && n.discountPer < 100
                  ? n.price * (1 - n.discountPer / 100)
                  : n.price
              }
            />
          ))
        ) : (
          <div className={styles.containerNoProducts}>
            <span className={styles.containerNoProductsText}>
              No hay productos para mostrar
            </span>
          </div>
        )}
      </div>
    </>
  );
}

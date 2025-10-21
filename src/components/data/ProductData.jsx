import { CATEGORIES } from "../../assets/utils/categories";

export const PRODUCT_DATA = [
  {
    id: "JM001",
    sealer: "Distribuidor X",
    productName: "Catan",
    price: 29990,
    discountPer: "20",
    boolDesct: true,
    image: "/public/images/Catan.webp",
    description:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    categorie: CATEGORIES.juego_mesa,
    reviews: {
      review1: {
        autor: "El chico julio",
        puntuation: 5,
        review: "La empanada traia caca",
      },
    },
  },
];

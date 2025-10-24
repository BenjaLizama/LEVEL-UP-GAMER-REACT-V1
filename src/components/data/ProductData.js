import { CATEGORIES } from "../../assets/utils/categories";

export const PRODUCT_DATA = [
  {
    id: "JM001",
    sealer: "Distribuidor X",
    productName: "Catan",
    price: 29990,
    discountPer: 75,
    image: "/public/images/Catan.webp",
    description:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    categorie: CATEGORIES.juego_mesa,
    reviews: {
      review1: {
        autor: "El chico julio",
        puntuation: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
      },
    },
  },
  {
    id: "JM002",
    sealer: "Distribuidor X",
    productName: "Carcassonne",
    price: 24990,
    discountPer: 0,
    image: "/public/images/Carcassonne.jpg",
    description:
      "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
    categorie: CATEGORIES.juego_mesa,
    reviews: {},
  },
  {
    id: "AC001",
    sealer: "Distribuidor X",
    productName: "Controlador Inalámbrico Xbox Series X",
    price: 59990,
    discountPer: 15,
    image: "/public/images/ControlXbox.png",
    description:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    categorie: CATEGORIES.accesorios,
    reviews: {
      review1: {
        autor: "El chico julio",
        puntuation: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ",
      },
    },
  },
  {
    id: "CO001",
    sealer: "Distribuidor X",
    productName: "PlayStation 5",
    price: 549990,
    discountPer: 12,
    image: "/public/images/Ps5.webp",
    description:
      "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
    categorie: CATEGORIES.consolas,
    reviews: {},
  },
  {
    id: "CG001",
    sealer: "Distribuidor X",
    productName: "PC Gamer ASUS ROG Strix",
    price: 1299990,
    discountPer: 0,
    image: "/public/images/PcGamer.png",
    description:
      "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
    categorie: CATEGORIES.compu_gamer,
    reviews: {},
  },
  {
    id: "SG001",
    sealer: "Distribuidor X",
    productName: "Silla Gamer Secretlab Titan",
    price: 349990,
    discountPer: 50,
    image: "/public/images/Sillaa.jpg",
    description:
      "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
    categorie: CATEGORIES.sillas,
    reviews: {},
  },
  {
    id: "MS001",
    sealer: "Distribuidor X",
    productName: "Mouse Gamer Logitech G502 HERO",
    price: 49990,
    discountPer: 33,
    image: "/public/images/LogitechG502Hero.webp",
    description:
      "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
    categorie: CATEGORIES.mouse,
    reviews: {},
  },
  {
    id: "MP001",
    sealer: "Distribuidor X",
    productName: "Mousepad Razer Goliathus Extended Chroma",
    price: 29990,
    discountPer: 0,
    image: "/public/images/Mousepad.webp",
    description:
      "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    categorie: CATEGORIES.mousepad,
    reviews: {},
  },
  {
    id: "PP001",
    sealer: "Distribuidor X",
    productName: "Polera Gamer Personalizada 'Level-Up'",
    price: 14990,
    discountPer: 0,
    image: "/public/images/LevelUpCamiseta.png",
    description:
      "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    categorie: CATEGORIES.poleras_personalizadas,
    reviews: {},
  },
];

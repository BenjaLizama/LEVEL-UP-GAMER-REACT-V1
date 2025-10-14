import React from "react";
import styles from "../../styles/AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre nosotros</h2>
        <p className={styles.paragraph}>
          En <span className={styles.span}>Level-Up Gamer</span> vivimos y
          respiramos videojuegos. Nacimos hace dos años, en plena pandemia, para
          responder a la creciente comunidad gamer en Chile que buscaba lo mejor
          sin salir de casa. Desde entonces nos dedicamos a traer todo lo que
          necesitas para tu setup: consolas, accesorios, PCs, sillas gamer y
          mucho más.
        </p>
        <p className={styles.paragraph}>
          No tenemos tienda física, porque jugamos en línea igual que tú.
          Hacemos envíos a todo Chile para que ningún jugador se quede sin
          equipar su rincón gamer.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestra misión</h2>
        <p className={styles.paragraph}>
          Llevarte productos de calidad top, con una experiencia de compra única
          y personalizada. Queremos que disfrutes cada paso y que sientas que
          somos parte de tu squad.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestra vision</h2>
        <p className={styles.paragraph}>
          Convertirnos en la tienda online gamer número uno en Chile. Queremos
          destacar por la innovación, el servicio que realmente escucha a los
          jugadores y un sistema de fidelización estilo “logros desbloqueados”
          para premiar a los más leales de nuestra comunidad.
        </p>
      </div>
    </>
  );
}

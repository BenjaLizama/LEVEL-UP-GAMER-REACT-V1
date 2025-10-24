import React from "react";
import styles from "../../styles/Home.module.css";
import Carousel from "../organisms/Carousel";
import Title from "../atoms/Title";
import Guia from "../organisms/Guia";
import Publication from "../organisms/Publication";
import VoteCard from "../molecules/VoteCard";
import AboutUs from "../organisms/AboutUs";
import Footer from "../organisms/Footer";
import Map from "../molecules/Map";
import SpotLightBorder from "../atoms/SpotLightBorder";
import { CAROUSEL_IMAGES } from "../data/CarouselImages";
import { GUIAS_INFO } from "../data/GuiasInfo";
import { NOTICES_DATA } from "../data/NoticesData";
import { VOTE_CARD } from "../data/VoteCardData";
import { MAPAS } from "../data/Maproutes";

export default function Home() {
  return (
    <>
      <div className={styles.first}>
        <Title text={"Lanzamientos mas esperados"} />
        <Carousel listImages={CAROUSEL_IMAGES.list} />
      </div>

      <div className={styles.second}>
        <Title text={"Guías de videojuegos"} />
        <div className={styles.guias}>
          {Object.values(GUIAS_INFO).map((n, i) => (
            <Guia key={i} {...n} />
          ))}
        </div>
      </div>

      <div className={styles.darkBackground}>
        <SpotLightBorder>
          <Title text="Últimas noticias" />
          <div className={styles.third}>
            {Object.values(NOTICES_DATA).map((n, i) => (
              <Publication key={i} {...n} />
            ))}
          </div>
        </SpotLightBorder>
        <SpotLightBorder>
          <div className={styles.fourth}>
            <Title text={"Top juegos"} />
            <div className={styles.top}>
              {Object.values(VOTE_CARD).map((n, i) => (
                <VoteCard key={i} {...n} />
              ))}
            </div>
          </div>
        </SpotLightBorder>
      </div>
      <div className={styles.maps}>
        <Title text={"Encuentranos"} />
        {Object.values(MAPAS).map((n, i) => (
          <Map key={i} {...n} />
        ))}
      </div>
      <div className={styles.fifth}>
        <AboutUs />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

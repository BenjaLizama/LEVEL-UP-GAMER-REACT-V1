import React from "react";
import styles from "../../styles/Home.module.css";
import Carousel from "../organisms/Carousel";
import Title from "../atoms/Title";
import Guia from "../organisms/Guia";
import Publication from "../organisms/Publication";
import VoteCard from "../molecules/VoteCard";
import AboutUs from "../organisms/AboutUs";
import Footer from "../organisms/Footer";
import { CAROUSEL_IMAGES } from "../templates/CarouselImages";
import { GUIAS_INFO } from "../templates/GuiasInfo";
import { NOTICES_DATA } from "../templates/NoticesData";
import { VOTE_CARD } from "../templates/VoteCardData";

export default function Home() {
  return (
    <>
      <div className={styles.first}>
        <Title text={"Lanzamientos mas esperados"} />
        <Carousel listImages={CAROUSEL_IMAGES.list} />
      </div>

      <div className={styles.second}>
        <Title text={"Guías de videojuegos"} />
        <Guia
          CardTitle={GUIAS_INFO.guide1.CardTitle}
          CardImage={GUIAS_INFO.guide1.CardImage}
        />
        <div className={styles.guias}>
          <Guia
            CardTitle={GUIAS_INFO.guide2.CardTitle}
            CardImage={GUIAS_INFO.guide2.CardImage}
          />
          <Guia
            CardTitle={GUIAS_INFO.guide3.CardTitle}
            CardImage={GUIAS_INFO.guide3.CardImage}
          />
          <Guia
            CardTitle={GUIAS_INFO.guide4.CardTitle}
            CardImage={GUIAS_INFO.guide4.CardImage}
          />
          <Guia
            CardTitle={GUIAS_INFO.guide5.CardTitle}
            CardImage={GUIAS_INFO.guide5.CardImage}
          />
        </div>
      </div>

      <div className={styles.darkBackground}>
        <div className={styles.third}>
          <Title text={"Ultimas noticias"} />
          <Publication
            name={NOTICES_DATA.user1.name}
            userName={NOTICES_DATA.user1.userName}
            profileImage={NOTICES_DATA.user1.profileImage}
            date={NOTICES_DATA.user1.date}
            textContent={NOTICES_DATA.user1.textContent}
            imageContent={NOTICES_DATA.user1.imageContent}
          />
          <Publication
            name={NOTICES_DATA.user2.name}
            userName={NOTICES_DATA.user2.userName}
            profileImage={NOTICES_DATA.user2.profileImage}
            date={NOTICES_DATA.user2.date}
            textContent={NOTICES_DATA.user2.textContent}
            imageContent={NOTICES_DATA.user2.imageContent}
          />
          <Publication
            name={NOTICES_DATA.user3.name}
            userName={NOTICES_DATA.user3.userName}
            profileImage={NOTICES_DATA.user3.profileImage}
            date={NOTICES_DATA.user3.date}
            textContent={NOTICES_DATA.user3.textContent}
            imageContent={NOTICES_DATA.user3.imageContent}
          />
        </div>
        <div className={styles.fourth}>
          <Title text={"Top juegos"} />
          <div className={styles.top}>
            <VoteCard
              gameImage={VOTE_CARD.card1.gameImage}
              name={VOTE_CARD.card1.name}
            />
            <VoteCard
              gameImage={VOTE_CARD.card2.gameImage}
              name={VOTE_CARD.card2.name}
            />
            <VoteCard
              gameImage={VOTE_CARD.card3.gameImage}
              name={VOTE_CARD.card3.name}
            />
            <VoteCard
              gameImage={VOTE_CARD.card4.gameImage}
              name={VOTE_CARD.card4.name}
            />
            <VoteCard
              gameImage={VOTE_CARD.card5.gameImage}
              name={VOTE_CARD.card5.name}
            />
            <VoteCard
              gameImage={VOTE_CARD.card6.gameImage}
              name={VOTE_CARD.card6.name}
            />
          </div>
        </div>
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

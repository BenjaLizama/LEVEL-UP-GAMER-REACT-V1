import React from "react";
import { URL } from "../../assets/utils/url";
import styles from "../../styles/Publication.module.css";
import { publicationButtonsData } from "../templates/PublicationButtonData";
import PublicationButton from "../atoms/PublicationButton";
import ZoomImage from "../molecules/ZoomImage";
import ToolTip from "../molecules/ToolTip";
import { ICONS_SOLID } from "../../assets/utils/icons";
import SimpleIcon from "../atoms/SimpleIcon";
import ShareBar from "./ShareBar";

export default function Publication({
  name = "User",
  userName = "Username",
  profileImage = URL.profileImage,
  date = "3h",
  textContent = `D’Angelo who wrote and performed Red Dead Redemption 2’s iconic soundtrack “Unshaken” has sadly passed away at 51.

  #test
  #test2

  According to a source, he loved #test3 the game so much that he used to visit Rockstar’s office just to play it for hours before launch.`,
  imageContent,
}) {
  const regex = /(#\w+)/g;
  const newTextContent = textContent.replace(
    regex,
    '<span class="hashtag">#$1</span>'
  );

  const partes = textContent.split(regex);

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      ></div>
      <div className={styles.publicationContainer}>
        <div className={styles.top}>
          <div className={styles.userInfo}>
            <span className={styles.name}>{name}</span>
            <span className={styles.userName}>{"@" + userName}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <ToolTip
            children={<SimpleIcon icon={ICONS_SOLID.compartir} />}
            content={<ShareBar />}
          />
        </div>
        <div className={styles.content}>
          <p>
            {partes.map((parte, i) => {
              if (regex.test(parte)) {
                return (
                  <span key={i} className={styles.hashtag}>
                    {parte}
                  </span>
                );
              }
              return parte;
            })}
          </p>
          {imageContent && (
            <ZoomImage
              src={imageContent}
              alt="Publication Image"
              className={styles.imageContent}
            />
          )}
          <div className={styles.buttons}>
            {publicationButtonsData.map((btn, index) => (
              <PublicationButton
                key={index}
                icon={btn.icon}
                quantity={btn.quantity}
                colorHover={btn.colorHover}
                color={btn.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

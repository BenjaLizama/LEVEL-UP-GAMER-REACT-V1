import React from "react";
import { URL } from "../../assets/utils/url";
import styles from "../../styles/Publication.module.css";
import { publicationButtonsData } from "../data/PublicationButtonData";
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
  textContent = "#textContent",
  imageContent,
}) {
  const regex = /(#\w+)/g;

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

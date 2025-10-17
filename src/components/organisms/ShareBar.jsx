import React from "react";
import styles from "../../styles/ShareBar.module.css";
import PublicationButton from "../atoms/PublicationButton";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function ShareBar() {
  return (
    <div className={styles.container}>
      <FaInstagram size={24} className={styles.icon} />
      <FaWhatsapp size={24} className={styles.icon} />
      <FaFacebook size={22} className={styles.icon} />
    </div>
  );
}

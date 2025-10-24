import React from "react";
import styles from "../../styles/Marketplace.module.css";
import ProductosTemplate from "../template/ProductosTemplate";

export default function Marketplace() {
  return (
    <div className={styles.container}>
      <ProductosTemplate />
    </div>
  );
}

import React from "react";
import styles from "../../styles/ReviewTemplate.module.css";
import Review from "../molecules/Review";
import { PRODUCT_DATA } from "../data/ProductData";
import { useParams } from "react-router-dom";

export default function ReviewTemplate({ id }) {
  const product = PRODUCT_DATA.find((p) => p.id === id);

  if (!product) {
    return console.log("Producto no encontrado");
  }

  const reviewsArray = Object.values(product.reviews);

  if (reviewsArray.length === 0) {
    return (
      <div className={styles.container}>
        <span className={styles.noReviews}>
          Aun no hay reseñas sobre este producto
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {reviewsArray.map((review, index) => (
        <Review
          key={index}
          autor={review.autor}
          puntuation={review.puntuation}
          review={review.review}
        />
      ))}
    </div>
  );
}

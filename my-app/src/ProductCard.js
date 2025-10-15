import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ name, price, discount }) {
  const finalPrice = price - (price * discount) / 100;
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p className={styles.price}>₹{price}</p>
      <p style={{ color: discount > 0 ? "green" : "gray" }}>
        {discount > 0 ? `${discount}% off → ₹${finalPrice}` : "No discount"}
      </p>
      <button className={styles.buyButton}>Buy Now</button>
    </div>
  );
}

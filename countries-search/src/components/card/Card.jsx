import React from "react";
import styles from "./Card.module.css";

const Card = ({ flag, name, alt }) => {
  return (
    <div className={`${styles.cardContainer} countryCard`}>
      <section className={styles.imageWrapper}>
        <img src={flag} alt={alt} className={styles.flagImage} />
      </section>
      <section className={styles.textWrapper}>
        <span>{name}</span>
      </section>
    </div>
  );
};

export default Card;

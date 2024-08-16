"use client";

import { useState } from "react";
import styles from "./Features.module.css";
import { FeaturesButton, FeaturesCardsContainer } from "@/components";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.features}>
      <div className={styles.textCont}>
        <h3>
          Our <span>Features</span>
        </h3>
        <p>
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <div className={styles.featuresCont}>
        <div className={styles.featuresNav}>
          <FeaturesButton
            className={`${styles.featuresButt} ${
              activeIndex === 0 ? styles.activeButton : ""
            }`}
            title="Online Banking"
            onClick={() => handleClick(0)}
          />
          <FeaturesButton
            className={`${styles.featuresButt} ${
              activeIndex === 1 ? styles.activeButton : ""
            }`}
            title="Financial Tools"
            onClick={() => handleClick(1)}
          />
          <FeaturesButton
            className={`${styles.featuresButt} ${
              activeIndex === 2 ? styles.activeButton : ""
            }`}
            title="Customer Support"
            onClick={() => handleClick(2)}
          />
        </div>
        <div className={styles.featuresCards}>
          <FeaturesCardsContainer
            className={`${styles.cardContainer} ${
              activeIndex === 0 ? styles.activeOne : ""
            }`}
          />
          <FeaturesCardsContainer
            className={`${styles.cardContainer2} ${
              activeIndex === 1 ? styles.activeOne : ""
            }`}
          />
          <FeaturesCardsContainer
            className={`${styles.cardContainer3} ${
              activeIndex === 2 ? styles.activeOne : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

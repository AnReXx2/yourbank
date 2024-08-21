"use client";

import styles from "./TextContainer.module.css";
import { PropsTypes } from "./types";

const TextTabContainer = ({ title, text, span, className }: PropsTypes) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.textCont}>
        <h3 className={styles.h3}>
          {title} <span>{span}</span>
        </h3>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default TextTabContainer;

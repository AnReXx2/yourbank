"use client";

import { useState } from "react";
import styles from "./TextTabContainer.module.css";
import { PropsTypes } from "./types";

const TextTabContainer = ({ title, text, span }: PropsTypes) => {
  return (
    <section className={styles.container}>
      <div className={styles.subCont1}>
        <div className={styles.textCont}>
          <h3 className={styles.h3}>
            {title} <span>{span}</span>
          </h3>
          <p>{text}</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default TextTabContainer;

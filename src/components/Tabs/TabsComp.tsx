"use client";

import { useState } from "react";
import styles from "./TabsComp.module.css";
import { PropsTypes } from "./types";

const TabsComp = ({ activeTab, onTabClick }: PropsTypes) => {
  return (
    <div className={styles.tabs}>
      <p
        className={`${styles.buttonTab} ${
          activeTab === "Individuals"
            ? styles.activeButtonTab
            : styles.inactiveButtonTab
        }`}
        onClick={() => onTabClick("Individuals")}
      >
        For Individuals
      </p>
      <p
        className={`${styles.text} ${
          activeTab === "Businesses" ? styles.active : styles.inactive
        }`}
        onClick={() => onTabClick("Businesses")}
      >
        For Businesses
      </p>
    </div>
  );
};

export default TabsComp;

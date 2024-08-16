"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";
import dropDown from "../../../public/assets/icons/drop_down-icon.svg";
import { FaqItemsCont } from "@/components";

const Faq = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.textCont}>
        <h3>
          <span>Frequently</span> Asked Questions
        </h3>
        <p>
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>
      <div className={styles.faqCont}>
        <FaqItemsCont className={styles.itemsCont} />
        <div
          className={`${styles.itemsCont2} ${
            active == true ? styles.activeButt : ""
          }`}
        >
          <FaqItemsCont />
        </div>
        <button className={`${styles.button}`} onClick={handleClick}>
          <p>Load All FAQ’s</p>
          <Image src={dropDown} alt="drop_down-icon" />
        </button>
      </div>
    </section>
  );
};

export default Faq;

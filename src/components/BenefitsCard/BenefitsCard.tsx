import Image from "next/image";
import styles from "./BenefitsCard.module.css";
import { PropsTypes } from "./types";

const BenefitsCard = ({ title, text, src }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Image
          className={styles.img}
          src={src}
          alt="icons"
          layout="intrinsic"
        />
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default BenefitsCard;

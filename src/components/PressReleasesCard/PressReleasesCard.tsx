import styles from "./PressReleasesCard.module.css";
import Image from "next/image";
import { PropsTypes } from "./types";

const PressReleasesCard = ({ title, text, src }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={src} alt="image" layout="" />
      <div className={styles.head}>
        <div className={styles.subHead}>
          <h3>{title}</h3>
          <div className={styles.labels}>
            <p>Location: India</p>
            <p>Date: 06/11/2024</p>
          </div>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default PressReleasesCard;

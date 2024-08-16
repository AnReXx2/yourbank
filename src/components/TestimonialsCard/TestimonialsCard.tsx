import Image from "next/image";
import styles from "./TestimonialsCard.module.css";
import { PropsTypes } from "./types";
import claws from "../../../public/assets/icons/claws_icon.svg";

const TestimonialsCard = ({ text, name }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <div className={styles.headLine}>
        <div className={styles.line}></div>
        <Image className={styles.claws} src={claws} alt="claws" />
        <div className={styles.line}></div>
      </div>
      <div className={styles.info}>
        <p>{text}</p>
      </div>
      <div className={styles.nameCont}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialsCard;

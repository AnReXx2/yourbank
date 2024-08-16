import Image from "next/image";
import styles from "./Card.module.css";
import { PropsTypes } from "./types";

const UseCasesCard = ({ title, src }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={src}
        alt="card-icon"
        layout="intrinsic"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default UseCasesCard;

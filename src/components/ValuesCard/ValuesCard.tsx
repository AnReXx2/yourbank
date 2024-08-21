import styles from "./ValuesCard.module.css";
import { PropsTypes } from "./types";

const ValuesCard = ({ title, text }: PropsTypes) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ValuesCard;

import styles from "./ValuesCard.module.css";
import { PropsTypes } from "./types";

const ValuesCard = ({ title, text, className }: PropsTypes) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ValuesCard;

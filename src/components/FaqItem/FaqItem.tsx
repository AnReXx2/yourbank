import styles from "./FaqItem.module.css";
import { PropsTypes } from "./types";

const FaqItem = ({ title, text }: PropsTypes) => {
  return (
    <div className={styles.item}>
      <h4>{title}</h4>
      <div className={styles.line}></div>
      <p>{text}</p>
    </div>
  );
};

export default FaqItem;

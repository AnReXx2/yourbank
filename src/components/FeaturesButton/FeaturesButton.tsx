import styles from "./FeaturesButton.module.css";
import { PropsTypes } from "./types";

const FeaturesButton = ({ title, className, onClick }: PropsTypes) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default FeaturesButton;

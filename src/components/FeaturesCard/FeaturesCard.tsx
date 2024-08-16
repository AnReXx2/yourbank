import styles from "./FeaturesCard.module.css";
import Image from "next/image";
import { PropsTypes } from "./types";
import featuresArrIcon from "../../../public/assets/icons/features_arrow-icon.svg";

const FeaturesCard = ({ title, text }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <h3>
        {title}
        <Image
          className={styles.arrow}
          src={featuresArrIcon}
          alt="features_arrow-icon"
        />
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesCard;

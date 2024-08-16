import styles from "./ProductsContainer.module.css";
import Image from "next/image";
import { PropsTypes } from "./types";

const ProductsContainer = ({ title, text, src }: PropsTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={src} alt="products-icon" layout="intrinsic" />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductsContainer;

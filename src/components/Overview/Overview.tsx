import Image from "next/image";
import styles from "./Overview.module.css";
import { PropsTypes } from "./types";
import abs from "../../../public/assets/abstract_designs/abstract_design-top-right.svg";

const Overview = ({ title, span, text, src }: PropsTypes) => {
  return (
    <section className={styles.overview}>
      <Image className={styles.abs} src={abs} alt="abstract" />
      <div className={styles.overviewInner}>
        <div className={styles.imgCont}>
          <Image className={styles.img} src={src} alt="overviewImg" />
        </div>
        <div className={styles.textCont}>
          <h1>
            {title}
            <span>{span}</span>
          </h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;

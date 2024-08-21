import Image from "next/image";
import styles from "./Overview.module.css";
import overviewImg from "../../../public/assets/image/overview_image.png";
import abs from "../../../public/assets/abstract_designs/abstract_design-top-right.svg";

const Overview = () => {
  return (
    <section className={styles.overview}>
      <Image className={styles.abs} src={abs} alt="abstract" />
      <div className={styles.overviewInner}>
        <div className={styles.imgCont}>
          <Image className={styles.img} src={overviewImg} alt="overviewImg" />
        </div>
        <div className={styles.textCont}>
          <h1>
            Welcome to <span>YourBank</span> Careers!
          </h1>
          <p>
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;

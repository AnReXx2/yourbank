import styles from "./page.module.css";
import overviewImage from "../../../public/assets/image/overview_image.png";
import { Overview, OurValues, Benefits, Jobs, Faq, Cta } from "@/components";

const Careers = () => {
  return (
    <main className={styles.content}>
      <section className={styles.overview}>
        <Overview
          title="Welcome to Careers!"
          text="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
          span="YourBank"
          src={overviewImage}
        />
      </section>
      <section className={styles.ourvalues}>
        <OurValues />
      </section>
      <section className={styles.benefits}>
        <Benefits />
      </section>
      <section className={styles.jobs}>
        <Jobs />
      </section>
      <section className={styles.faq}>
        <Faq />
      </section>
      <section className={styles.cta}>
        <Cta />
      </section>
    </main>
  );
};

export default Careers;

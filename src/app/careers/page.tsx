import styles from "./page.module.css";
import { Overview, OurValues, Benefits, Jobs, Faq, Cta } from "@/components";

const Careers = () => {
  return (
    <main className={styles.content}>
      <section className={styles.overview}>
        <Overview />
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

import styles from "./page.module.css";
import securityImg from "../../../public/assets/image/security_image.png";
import { Overview, Benefits, Faq } from "@/components";

const Security = () => {
  return (
    <main className={styles.content}>
      <section className={styles.overview}>
        <Overview
          title="Your Security is Our"
          span=" Top Priority"
          text="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
          src={securityImg}
        />
      </section>
      <section className={styles.benefitsCard}>
        <Benefits />
      </section>
      <section className={styles.faq}>
        <Faq />
      </section>
    </main>
  );
};

export default Security;

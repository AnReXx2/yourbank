import styles from "./Cta.module.css";
import { Button } from "@/components";

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.textCont}>
        <h3>
          Start your financial journey with <span>YourBank today!</span>
        </h3>
        <p>
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </p>
      </div>
      <Button className={styles.buttonCta} title="Open Account" />
    </section>
  );
};

export default Cta;

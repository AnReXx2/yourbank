import styles from "./OurValues.module.css";
import { ValuesCard, TextContainer } from "@/components";

const OurValues = () => {
  return (
    <section className={styles.ourvalues}>
      <TextContainer
        title="Our"
        span="Values"
        text="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
      />
      <div className={styles.valuesCards}>
        <div className={styles.card}>
          <ValuesCard
            title="Integrity"
            text="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
          />
          <ValuesCard
            title="Customer Centricity"
            text="Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
          />
        </div>
        <div className={styles.card}>
          <ValuesCard
            title="Collaboration"
            text="We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
          />
          <ValuesCard
            title="Innovation"
            text="We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;

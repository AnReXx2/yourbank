import styles from "./Benefits.module.css";
import compensationIcon from "../../../public/assets/icons/compensation_icon.svg";
import healtWellnesIcon from "../../../public/assets/icons/health_wellnes-icon.svg";
import retirementIcon from "../../../public/assets/icons/retirement_icon.svg";
import balanceIcon from "../../../public/assets/icons/balance_icon.svg";
import { BenefitsCard } from "@/components";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.textCont}>
        <h3>
          Our <span>Benefits</span>
        </h3>
        <p>
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>
      <div className={styles.benefitsCards}>
        <div className={styles.card}>
          <BenefitsCard
            title="Competitive Compensation"
            text="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
            src={compensationIcon}
          />
          <BenefitsCard
            title="Health and Wellness"
            text="We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
            src={healtWellnesIcon}
          />
        </div>
        <div className={styles.card}>
          <BenefitsCard
            title="Retirement Planning"
            text="YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
            src={retirementIcon}
          />
          <BenefitsCard
            title="Work-Life Balance"
            text="We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
            src={balanceIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

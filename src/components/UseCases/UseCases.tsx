import styles from "./UseCases.module.css";
import { CardsCont, UseCasesInfo } from "@/components";

const UseCases = () => {
  return (
    <section className={styles.useCases}>
      <div className={styles.textCont}>
        <h4>Use Cases</h4>
        <p>
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>
      <div className={styles.subCont}>
        <div className={styles.container}>
          <CardsCont />
          <UseCasesInfo
            title="For Individuals"
            text="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
            infoTitle="78%"
            infoText="Secure Retirement Planning"
            infoTitle2="63%"
            infoText2="Manageable Debt Consolidation"
            infoTitle3="91%"
            infoText3="Reducing financial burdens"
          />
        </div>
        <div className={styles.container}>
          <UseCasesInfo
            title="For Individuals"
            text="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
            infoTitle="78%"
            infoText="Secure Retirement Planning"
            infoTitle2="63%"
            infoText2="Manageable Debt Consolidation"
            infoTitle3="91%"
            infoText3="Reducing financial burdens"
          />
          <CardsCont className={styles.abs} />
        </div>
      </div>
    </section>
  );
};

export default UseCases;

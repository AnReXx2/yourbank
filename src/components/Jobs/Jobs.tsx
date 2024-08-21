import styles from "./Jobs.module.css";
import { JobsCard, TextContainer } from "@/components";

const Jobs = () => {
  return (
    <section className={styles.jobs}>
      <TextContainer
        title="Job Openings"
        text="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"
      />
      <div className={styles.jobsCards}>
        <div className={styles.flex}>
          <JobsCard
            title="Relationship Manager"
            aboutText="As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking skills, a strong sales acumen, and a customer service."
          />
          <JobsCard
            title="Risk Analyst"
            aboutText="As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles."
          />
        </div>
        <div className={styles.flex}>
          <JobsCard
            title="IT Security Specialist"
            aboutText="As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.a"
          />
        </div>
      </div>
    </section>
  );
};

export default Jobs;

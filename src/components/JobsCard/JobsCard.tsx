import Image from "next/image";
import styles from "./JobsCard.module.css";
import requairementIcon from "../../../public/assets/icons/requairement_icon.svg";
import { PropsTypes } from "./types";
import { Button } from "@/components";

const JobsCard = ({ title, aboutText }: PropsTypes) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h1>{title}</h1>
        <div className={styles.labels}>
          <p>Location: India</p>
          <p>Department: Retail Banking</p>
        </div>
      </div>
      <div className={styles.body}>
        <h2>About This Job</h2>
        <p>{aboutText}</p>
      </div>
      <div className={styles.final}>
        <h3>Requirements & Qualifications</h3>
        <div className={styles.requairement}>
          <div>
            <Image src={requairementIcon} alt="icon" />
            <p>Bachelors degree in Business, Finance, or a related field</p>
          </div>
          <div>
            <Image src={requairementIcon} alt="icon" />
            <p>
              Minimum of 3 years of experience in sales or relationship
              management in the banking industry
            </p>
          </div>
          <div>
            <Image src={requairementIcon} alt="icon" />
            <p>Proven track record of meeting and exceeding sales targets</p>
          </div>
          <div>
            <Image src={requairementIcon} alt="icon" />
            <p>Excellent interpersonal and negotiation skills</p>
          </div>
          <div>
            <Image src={requairementIcon} alt="icon" />
            <p>Strong knowledge of banking products and services</p>
          </div>
        </div>
      </div>
      <Button className={styles.butt} title="Apply Now" />
    </div>
  );
};

export default JobsCard;

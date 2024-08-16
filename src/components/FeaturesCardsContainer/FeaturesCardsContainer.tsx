import styles from "./FeaturesCardsContainer.module.css";
import { PropsTypes } from "./types";
import { FeaturesCard } from "@/components";

const FeaturesCardsContainer = ({ className }: PropsTypes) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.cont1}>
        <FeaturesCard
          title="24/7 Account Access"
          text="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
        />
        <FeaturesCard
          title="Mobile Banking App"
          text="Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
        />
      </div>
      <div className={styles.cont2}>
        <FeaturesCard
          title="Secure Transactions"
          text="Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
        />
        <FeaturesCard
          title="Bill Pay and Transfers"
          text="Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
        />
      </div>
    </div>
  );
};

export default FeaturesCardsContainer;

import styles from "./Transaction.module.css";
import Image from "next/image";
import { PropsTypes } from "./types";
import arrIcon from "../../../public/assets/icons/transaction_arrow-icon.svg";

const Transaction = ({ className, title }: PropsTypes) => {
  return (
    <div className={`${styles.transaction} ${className}`}>
      <div>
        <Image src={arrIcon} alt="exchange_icon" />
        <div>
          <p>Transaction</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className={styles.tranMoney}>-$68.00</p>
    </div>
  );
};

export default Transaction;

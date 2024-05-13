import Image from "next/image";
import styles from "./Transaction.module.scss";
import TradeIcon from "../../../public/assets/icons/trade_icon.svg";
import { PropsType } from "./types";

export default function Transaction(props: PropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.trade}>
        <Image src={TradeIcon} alt="trade_icon" />
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.text}>Transaction</p>
          <h5 className={styles.title}>{props.title}</h5>
        </div>
        <div>
          <p className={styles.price}>-$68.00</p>
        </div>
      </div>
    </div>
  );
}

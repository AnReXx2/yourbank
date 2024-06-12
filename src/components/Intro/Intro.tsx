import styles from "./Intro.module.scss";
import Image from "next/image";
import Link from "next/link";
import Check from "../../../public/assets/icons/check_icon.svg";
import { Button } from "../Button";
import Transaction from "../Transaction/Transaction";
import PlusIcon from "../../../public/assets/icons/plus_icon.svg";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.sub_intro}>
        <div className={styles.check}>
          <Image src={Check} alt="check_icon" />
          <p className={styles.check_text}>No LLC Required, No Credit Check.</p>
        </div>
        <h1 className={styles.intro_title}>
          Welcome to YourBank Empowering Your
          <span className={styles.intro_title_span}>Financial Journey.</span>
        </h1>
        <p className={styles.intro_text}>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritiz e our customer's needs.
        </p>
        <Button title="Open Account" />
      </div>
      <div className={styles.transactions}>
        <div className={styles.monthly}>
          <div className={styles.plus}>
            <Image src={PlusIcon} alt="plus_icon" />
          </div>
          <div className={styles.info}>
            <p className={styles.info_title}>+ $5000,00</p>
            <p className={styles.info_text}>Monthly Income</p>
          </div>
        </div>
        <div className={styles.transactions_container}>
          <h4 className={styles.transactions_title}>Your Transactions</h4>
          <div className={styles.components}>
            <Transaction title="Joel Kenley" />
            <Transaction title="Mark Smith" />
            <Transaction title="Lenen Roy" />
          </div>
        </div>
        <div className={styles.exchange_container}>
          <h4 className={styles.exchange_title}>Money Exchange</h4>
          <div className={styles.exchange_sub_container}>
            <table>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

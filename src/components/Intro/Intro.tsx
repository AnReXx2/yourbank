import styles from "./Intro.module.css";
import Image from "next/image";
import Link from "next/link";
import check from "../../../public/assets/icons/check_icon.svg";
import indian from "../../../public/assets/icons/indianflaf_icon.svg";
import usd from "../../../public/assets/icons/usdflag_icon.svg";
import arrAbs from "../../../public/assets/abstract_designs/arrows_abstract-design.svg";
import dollar from "../../../public/assets/icons/dollar.svg";
import euro from "../../../public/assets/icons/euro.svg";
import bitcoin from "../../../public/assets/icons/bitcoin.svg";
import iron from "../../../public/assets/icons/iron.svg";
import { Button, Transaction } from "@/components";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.cont1}>
        <div className={styles.checkCont}>
          <Image src={check} alt="check_icon" />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <div className={styles.description}>
          <h1>
            Welcome to YourBank Empowering Your <span>Financial Journey</span>
          </h1>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers needs.
          </p>
        </div>
        <div className={styles.buttonCont}>
          <Button className={styles.button} title="Open Account" />
        </div>
      </div>
      <div className={styles.cont2}>
        <Image
          className={styles.arrAbs}
          src={arrAbs}
          alt="arrow_abstract-design"
        />
        <div className={styles.transactionCont}>
          <div className={styles.montly}>
            <div className={styles.plusIcon}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.fill}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70357 0.601562C7.06271 0.601562 7.35384 0.892701 7.35384 1.25184V5.80378H11.9058C12.2649 5.80378 12.5561 6.09492 12.5561 6.45406C12.5561 6.81319 12.2649 7.10433 11.9058 7.10433H7.35384V11.6563C7.35384 12.0154 7.06271 12.3066 6.70357 12.3066C6.34443 12.3066 6.05329 12.0154 6.05329 11.6563V7.10433H1.50135C1.14221 7.10433 0.851074 6.81319 0.851074 6.45405C0.851074 6.09492 1.14221 5.80378 1.50135 5.80378L6.05329 5.80378V1.25184C6.05329 0.892701 6.34443 0.601562 6.70357 0.601562Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
            <div className={styles.textCont}>
              <h5>+ $5000,00</h5>
              <p>Monthly Income</p>
            </div>
          </div>
          <div className={styles.transactions}>
            <h3 className={styles.tranTitle}>Your Transactions</h3>
            <div>
              <Transaction title="Joel Kenley" className={styles.tcont} />
              <div className={styles.comp2}>
                <Transaction className={styles.tcont1} title="Mark Smith" />
              </div>
              <div className={styles.comp3}>
                <Transaction className={styles.tcont2} title="Lenen Roy" />
              </div>
            </div>
          </div>
          <div className={styles.exchangeCont}>
            <h3 className={styles.tranTitle}>Money Exchange</h3>
            <div className={styles.valutCont}>
              <div className={styles.firstSect}>
                <div className={styles.valut}>
                  <div>
                    <Image src={indian} alt="indian_flag-icon" />
                    <p className={styles.title}>INR</p>
                  </div>
                  <p className={styles.text}>Indian Rupees</p>
                </div>
                <div className={styles.valut}>
                  <div>
                    <Image src={usd} alt="indian_flag-icon" />
                    <p className={styles.title}>USD</p>
                  </div>
                  <p className={styles.text}>United States Dollar</p>
                </div>
              </div>
              <div className={styles.secondSect}>
                <div className={styles.price}>
                  <p>5,0000</p>
                </div>
                <div className={styles.price}>
                  <p>12.00</p>
                </div>
              </div>
            </div>
          </div>
          <Link className={styles.exchange} href={""}>
            Exchange
          </Link>
        </div>
        <div className={styles.supporterCont}>
          <p>Supported Currency</p>
          <div className={styles.suppImgs}>
            <Link className={styles.suppLink} href={""}>
              <Image src={dollar} alt="dollar" />
            </Link>
            <Link className={styles.suppLink} href={""}>
              <Image src={euro} alt="euro" />
            </Link>
            <Link className={styles.suppLink} href={""}>
              <Image src={bitcoin} alt="bitcoin" />
            </Link>
            <Link className={styles.suppLink} href={""}>
              <Image src={iron} alt="iron" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

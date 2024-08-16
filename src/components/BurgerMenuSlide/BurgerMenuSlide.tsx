import styles from "./BurgerMenuSlide.module.css";
import Link from "next/link";
import { PropsTypes } from "./types";
import { Button } from "@/components";

const BurgerMenuSlide = ({ className }: PropsTypes) => {
  return (
    <div className={`${styles.burgerMenuSlide} ${className}`}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.link} href={""}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Careers
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Security
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.sign}>
        <Link className={styles.signUp} href={""}>
          Sign Up
        </Link>
        <Button title="Login" />
      </div>
    </div>
  );
};

export default BurgerMenuSlide;

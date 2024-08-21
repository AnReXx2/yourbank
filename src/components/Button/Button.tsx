import styles from "./Button.module.css";
import { PropsTypes } from "./types";
import Link from "next/link";

const Button = ({ title, className, onClick }: PropsTypes) => {
  return (
    <Link
      className={`${styles.button} ${className}`}
      href={"/login"}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default Button;

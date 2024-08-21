import styles from "./Button.module.css";
import { PropsTypes } from "./types";
import Link from "next/link";

const Button = ({ title, className, onClick }: PropsTypes) => {
  return (
    <div className={`${styles.button} ${className}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;

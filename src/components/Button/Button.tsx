import styles from "./Button.module.scss";
import { PropsType } from "./types";
import Link from "next/link";

export default function Button(props: PropsType) {
  return (
    <Link className={styles.button} href={""}>
      {props.title}
    </Link>
  );
}

import { PropsType } from "./types";
import styles from "./HeaderNav.module.scss";
import Link from "next/link";

export default function HeaderNav(props: PropsType) {
  return (
    <Link className={styles.link} href={props.href}>
      <li className={styles.item}>{props.title}</li>
    </Link>
  );
}

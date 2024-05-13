import styles from "./page.module.scss";
import { Intro } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
};

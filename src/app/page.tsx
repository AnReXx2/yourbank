import styles from "./page.module.css";
import Image from "next/image";
import absDesign from "../../public/assets/abstract_designs/abstract_design.svg";
import {
  Intro,
  Products,
  UseCases,
  Features,
  Faq,
  Testimonials,
  Cta,
} from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.absDesign}
        src={absDesign}
        alt="Abstract-Design"
      />
      <main className={styles.content}>
        <section className={styles.intro}>
          <Intro />
        </section>
        <section className={styles.products}>
          <Products />
        </section>
        <section className={styles.useCases}>
          <UseCases />
        </section>
        <section className={styles.features}>
          <Features />
        </section>
        <section className={styles.faq}>
          <Faq />
        </section>
        <section className={styles.testimonials}>
          <Testimonials />
        </section>
        <section className={styles.cta}>
          <Cta />
        </section>
      </main>
    </main>
  );
}

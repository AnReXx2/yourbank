import styles from "./page.module.css";
import overviewImage2 from "../../../public/assets/image/overview_image-2.png";
import { Overview, MissionVision, PressReleases } from "@/components";

const About = () => {
  return (
    <main className={styles.content}>
      <section className={styles.overviews}>
        <Overview
          title="Where Banking Meets"
          span="Excellence!"
          text="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
          src={overviewImage2}
        />
      </section>
      <section className={styles.missionVision}>
        <MissionVision />
      </section>
      <section className={styles.pressReleases}>
        <PressReleases />
      </section>
    </main>
  );
};

export default About;

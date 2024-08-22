import styles from "./PressReleases.module.css";
import pressReleaseImg1 from "../../../public/assets/image/pressreleases_image-1.png";
import pressReleaseImg2 from "../../../public/assets/image/pressreleases_image-2.png";
import pressReleaseImg3 from "../../../public/assets/image/pressreleases_image-3.png";
import pressReleaseImg4 from "../../../public/assets/image/pressreleases_image-4.png";
import { TextContainer, PressReleasesCard } from "@/components";

const PressReleases = () => {
  return (
    <section className={styles.pressReleases}>
      <div className={styles.textCont}>
        <TextContainer
          title="Press Releases"
          text="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
        />
      </div>
      <div className={styles.cardsCont}>
        <div className={styles.cont}>
          <PressReleasesCard
            title="YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction"
            text="YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."
            src={pressReleaseImg1}
          />
          <PressReleasesCard
            title="YourBank Expands Branch Network with Opening of New Location in Chennai"
            text="YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community."
            src={pressReleaseImg2}
          />
        </div>
        <div className={styles.cont}>
          <PressReleasesCard
            title="YourBank Partners with Local Nonprofit to Support Financial Education Initiatives"
            text="YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
            src={pressReleaseImg3}
          />
          <PressReleasesCard
            title="YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility"
            text="YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
            src={pressReleaseImg4}
          />
        </div>
      </div>
    </section>
  );
};

export default PressReleases;

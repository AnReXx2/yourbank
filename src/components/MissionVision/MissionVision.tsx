import Image from "next/image";
import styles from "./MissionVision.module.css";
import missionImg1 from "../../../public/assets/image/mission_image-1.png";
import missionImg2 from "../../../public/assets/image/mission_image-2.png";
import { TextContainer, ValuesCard } from "@/components";

const MissionVision = () => {
  return (
    <section className={styles.missionVision}>
      <div className={styles.textCont}>
        <TextContainer
          title="Mission & Vision"
          text="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
        />
      </div>
      <div className={styles.subCont}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              className={styles.img}
              src={missionImg1}
              alt="mission_image"
            />
          </div>
          <ValuesCard
            className={styles.revarse}
            title="Mission"
            text="At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams."
          />
        </div>
        <div className={styles.card}>
          <ValuesCard
            className={styles.revarse}
            title="Vision"
            text="Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction."
          />
          <div className={styles.cardImg}>
            <Image
              className={styles.img}
              src={missionImg2}
              alt="mission_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

import Image from "next/image";
import styles from "./CardsCont.module.css";
import { PropsTypes } from "./types";
import cardIcon1 from "../../../public/assets/icons/card_icon-1.svg";
import cardIcon2 from "../../../public/assets/icons/card_icon-2.svg";
import cardIcon3 from "../../../public/assets/icons/card_icon-3.svg";
import cardIcon4 from "../../../public/assets/icons/card_icon-4.svg";
import useCasesAbs1 from "../../../public/assets/abstract_designs/usecases_abstract-design-1.svg";
import { Card } from "@/components";

const CardsCont = ({ className }: PropsTypes) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        className={styles.absDesign}
        src={useCasesAbs1}
        alt="usecases_abstract-design"
      />
      <div>
        <Card title="Managing Personal Finances" src={cardIcon1} />
        <Card title="Saving for the Future" src={cardIcon2} />
      </div>
      <div>
        <Card title="Homeownership" src={cardIcon3} />
        <Card title="Education Funding" src={cardIcon4} />
      </div>
    </div>
  );
};

export default CardsCont;

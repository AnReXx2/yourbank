import Link from "next/link";
import styles from "./UseCasesInfo.module.css";
import { PropsTypes } from "./types";

const UseCasesInfo = ({
  title,
  text,
  infoText,
  infoTitle,
  infoTitle2,
  infoTitle3,
  infoText2,
  infoText3,
}: PropsTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.textCont}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className={styles.infoCont}>
        <div>
          <h3>{infoTitle}</h3>
          <p>{infoText}</p>
        </div>
        <div>
          <h3>{infoTitle2}</h3>
          <p>{infoText2}</p>
        </div>
        <div>
          <h3>{infoTitle3}</h3>
          <p>{infoText3}</p>
        </div>
      </div>
      <Link className={styles.link} href={""}>
        Learn More
      </Link>
    </div>
  );
};

export default UseCasesInfo;

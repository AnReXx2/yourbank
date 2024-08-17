import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import footerLogo from "../../../public/assets/logo.svg";
import mailIcon from "../../../public/assets/icons/mail_icon.svg";
import phoneIcon from "../../../public/assets/icons/phone_icon.svg";
import locationIcon from "../../../public/assets/icons/location_icon.svg";
import fcIcon from "../../../public/assets/icons/facebook_icon.svg";
import ttIcon from "../../../public/assets/icons/tt_icon.svg";
import inIcon from "../../../public/assets/icons/in_icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.head}>
        <Link href={"/"}>
          <Image src={footerLogo} alt="footer_logo" />
        </Link>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/careers"}>
                Careers
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={"/security"}>
                Security
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.line}></div>
      <div className={styles.body}>
        <div>
          <Image src={mailIcon} alt="mail_icon" />
          <p>hello@skillbirdge.com</p>
        </div>
        <div>
          <Image src={phoneIcon} alt="phone_icon" />
          <p>+91 91813 23 2309</p>
        </div>
        <div>
          <Image src={locationIcon} alt="location_icon" />
          <p>Somewhere in the World</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.final}>
        <div className={styles.socialsIcons}>
          <Link className={styles.socialIcon} href={""}>
            <Image src={fcIcon} alt="fc_icon" />
          </Link>
          <Link className={styles.socialIcon} href={""}>
            <Image src={ttIcon} alt="tt_icon" />
          </Link>
          <Link className={styles.socialIcon} href={""}>
            <Image src={inIcon} alt="in_icon" />
          </Link>
        </div>
        <div className={styles.text}>
          <p>YourBank All Rights Reserved</p>
        </div>
        <div>
          <p className={styles.copyright}>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

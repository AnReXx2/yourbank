import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import googleIcon from "../../../public/assets/icons/google_icon.svg";
import fbIcon from "../../../public/assets/icons/fb_icon.svg";
import appleIcon from "../../../public/assets/icons/apple_icon.png";
import { TextContainer, Button, Testimonials } from "@/components";

const SignUp = () => {
  return (
    <div className={styles.sign}>
      <div className={styles.textCont}>
        <TextContainer
          span="Sign Up"
          text="Join our community today! Create an account to unlock exclusive features and personalized experiences."
        />
      </div>
      <form className={styles.form} action="">
        <div>
          <input
            className={styles.input}
            type="text"
            name="text"
            id="text"
            placeholder="Enter First Name"
          />
          <input
            className={styles.input}
            type="text"
            name="text"
            id="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="email"
            name="mail"
            id="mail"
            placeholder="Enter your Email"
          />
          <input
            className={styles.input}
            type="password"
            name="pass"
            id="pass"
            placeholder="Enter your Password"
          />
        </div>
      </form>
      <Link className={styles.link} href={""}>
        Forgot Password?
      </Link>
      <div className={styles.final}>
        <div className={styles.btns}>
          <Button className={styles.btn} title="Sign Up" />
          <button className={styles.butt}>Login</button>
        </div>
        <div className={styles.socials}>
          <div className={styles.socCont}>
            <div className={styles.line}></div>
            <p>Or Continue with</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socIcons}>
            <Link className={styles.icon} href={""}>
              <Image src={googleIcon} alt="google_icon" />
            </Link>
            <Link className={styles.icon} href={""}>
              <Image src={fbIcon} alt="facebook_icon" />
            </Link>
            <Link className={styles.icon} href={""}>
              <Image src={appleIcon} alt="apple_icon" />
            </Link>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default SignUp;

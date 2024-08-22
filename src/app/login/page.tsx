import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import googleIcon from "../../../public/assets/icons/google_icon.svg";
import fbIcon from "../../../public/assets/icons/fb_icon.svg";
import appleIcon from "../../../public/assets/icons/apple_icon.png";
import { TextContainer, Button, Testimonials } from "@/components";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.textCont}>
        <TextContainer
          span="Login"
          text="Welcome back! Please log in to access your account."
        />
      </div>
      <form className={styles.form} action="">
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
      </form>
      <Link className={styles.link} href={""}>
        Forgot Password?
      </Link>
      <div className={styles.final}>
        <div className={styles.btns}>
          <Button className={styles.btn} title="Login" />
          <button className={styles.butt}>Sign Up</button>
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

export default Login;

import Link from "next/link";
import { HeaderNav } from "../HeaderNav";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import { Button } from "../Button";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <Link className={styles.logo} href={"/"}>
          <Image src={Logo} alt="Web-site logo" />
          <span className={styles.logo_text}>YourBank</span>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <div className={styles.nav_listItems}>
              <HeaderNav title="Home" href="/" />
              <HeaderNav title="Careers" href="/careers" />
              <HeaderNav title="About" href="/about" />
              <HeaderNav title="Security" href="/security" />
            </div>
          </ul>
        </nav>
        <div className={styles.sign}>
          <Link className={styles.sign_button} href={""}>
            Sign up
          </Link>
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
}

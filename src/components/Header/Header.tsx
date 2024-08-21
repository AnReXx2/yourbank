"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";
import { Button, BurgerMenuSlide } from "@/components";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src={logo} alt="headerLogo" />
      </Link>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
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
      <div className={styles.sign}>
        <Link className={styles.signUp} href={"/sign_up"}>
          Sign Up
        </Link>
        <Link href={"/login"}>
          <Button title="Login" />
        </Link>
      </div>
      <div
        className={`${styles.burger} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
        <span className={styles.burgerItem}></span>
      </div>
      <BurgerMenuSlide
        className={`${styles.burgerMenuSlide} ${
          isMenuOpen ? styles.active : ""
        }`}
      />
    </header>
  );
};

export default Header;

"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";
import { Button, BurgerMenuSlide } from "@/components";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<number>(0);

  const handleClick = (clicked: number) => {
    setActive(clicked);
  };

  const handleResetActive = (reset: number) => {
    setActive(reset);
  };

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
      <Link href={"/"} onClick={() => handleResetActive(1)}>
        <Image src={logo} alt="headerLogo" />
      </Link>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link
              className={`${styles.link} ${
                active === 1 ? styles.activeLink : ""
              }`}
              href={"/"}
              onClick={() => handleClick(1)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                active === 2 ? styles.activeLink : ""
              }`}
              href={"/careers"}
              onClick={() => handleClick(2)}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                active === 3 ? styles.activeLink : ""
              }`}
              href={"/about"}
              onClick={() => handleClick(3)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                active === 4 ? styles.activeLink : ""
              }`}
              href={"/security"}
              onClick={() => handleClick(4)}
            >
              Security
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.sign}>
        <Link
          className={styles.signUp}
          href={"/sign_up"}
          onClick={() => handleResetActive(0)}
        >
          Sign Up
        </Link>
        <Link href={"/login"} onClick={() => handleResetActive(0)}>
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

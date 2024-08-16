"use client";

import { useState } from "react";
import styles from "./Products.module.css";
import Image from "../../../public/assets/icons/product_icon-1.svg";
import { TabsComp, ProductsContainer, TextTabContainer } from "@/components";

const Products = () => {
  const [activeTab, setActiveTab] = useState<string>("Businesses");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section className={styles.products}>
      <div className={styles.subCont1}>
        <div className={styles.textCont}>
          <TextTabContainer
            title="Our"
            span="Products"
            text="Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations"
          />
        </div>
        <TabsComp activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className={styles.subCont2}>
        <div
          className={styles.productsCont}
          style={{ display: activeTab === "Individuals" ? "flex" : "none" }}
        >
          <ProductsContainer
            src={Image}
            title="Checking Accounts"
            text="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
          />
          <ProductsContainer
            src={Image}
            title="Savings Accounts"
            text="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
          />
          <ProductsContainer
            src={Image}
            title="Loans and Mortgages"
            text="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
          />
        </div>
        <div
          className={styles.productsCont2}
          style={{ display: activeTab === "Businesses" ? "flex" : "none" }}
        >
          <ProductsContainer
            src={Image}
            title="Hello"
            text="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
          />
          <ProductsContainer
            src={Image}
            title="Hello"
            text="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
          />
          <ProductsContainer
            src={Image}
            title="Hello"
            text="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

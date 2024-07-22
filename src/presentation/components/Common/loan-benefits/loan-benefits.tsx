import React from "react";

import { LoanBenefitsItems } from "@/data";

import styles from "./loan-benefits.module.scss";
import Image from "next/image";

type LoanBenefitsTypes = {
  title: string;
};

const LoanBenefits: React.FC<LoanBenefitsTypes> = ({ title }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles["title-section"]}>{title}</h1>
      <div className={styles["box-section"]}>
        {LoanBenefitsItems.map((item, index) => (
          <div className={styles.box} key={index}>
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                className={styles.img}
                width={100}
                height={100}
              />
            )}
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.paragraph}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanBenefits;

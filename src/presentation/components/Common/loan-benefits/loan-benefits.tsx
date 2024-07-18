import React from "react";

import { LoanBenefitsItems } from "@/data";

import styles from "./loan-benefits.module.scss";

const LoanBenefits = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles["title-section"]}>Vantagens do Empréstimo FGTS</h1>
      <div className={styles["box-section"]}>
        {LoanBenefitsItems.map((item, index) => (
          <div className={styles.box} key={index}>
            {item.icon &&
              React.cloneElement(item.icon, { className: styles.icon })}
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.paragraph}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanBenefits;

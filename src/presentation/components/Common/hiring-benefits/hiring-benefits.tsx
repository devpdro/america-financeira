import React from "react";

import styles from "./hiring-benefits.module.scss";
import { Button } from "../../form";
import CarouselConsigned from "../../carousel/consigned-carousel/consigned-carousel";

const HiringBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["box-text"]}>
          <h6 className={styles.subtitle}>Vantagens do Crédito Consignado</h6>
          <h1 className={styles.title}>
            Por que contratar o Empréstimo <br /> Consignado da América
            Financeira?
          </h1>
          <Button
            typeStyle="btn1"
            width="350px"
            text="Quero contratar"
          ></Button>
          <p className={styles.paragraph}>
            *Sujeito à analise de crédito e condições do produto
          </p>
        </div>
        <div className={styles["box-carousel"]}>
          <CarouselConsigned />
        </div>
      </div>
    </section>
  );
};

export default HiringBenefits;

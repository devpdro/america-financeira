import React from "react";
import Image from "next/image";

import styles from "./consined-loan-info.module.scss";

import emprestimoImg from "../../../assets/image/img/emprestimo-consignado.jpg";
import { Button } from "../../Form";

type ConsinedTypes = {
  title: string;
  subtitle: string;
  paragraph: string;
};

const ConsinedLoanInfo: React.FC<ConsinedTypes> = ({
  title,
  subtitle,
  paragraph,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h6 className={styles.subtitle}>{subtitle}</h6>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
        <Button
          typeStyle="btn1"
          width="350px"
          text="Simular empréstimo"
        ></Button>
      </div>
      <div className={styles["image-section"]}>
        <Image
          className={styles.img}
          src={emprestimoImg}
          alt="Imagem de Empréstimo Consignado"
        />
      </div>
    </section>
  );
};

export default ConsinedLoanInfo;

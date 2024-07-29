"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./loan-info.module.scss";

import { Button } from "@/presentation/components/form";
import emprestimoImg from "../../../assets/image/img/emprestimo-consignado.jpg";

type ConsinedTypes = {
  title: string;
  subtitle: string;
  paragraph: string;
  imagePosition: "left" | "right";
};

const LoanInfo: React.FC<ConsinedTypes> = ({ title, subtitle, paragraph, imagePosition }) => {
  return (
    <section className={styles.container}>
      {imagePosition === "left" && (
        <>
          <div className={styles["text-section"]}>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{paragraph}</p>
            <Link href="#header">
              <Button
                typeStyle="btn1"
                width="350px"
                text="Simular empréstimo"
              />
            </Link>
          </div>
          <div className={styles["image-section"]}>
            <Image
              className={styles.img}
              src={emprestimoImg}
              alt="Imagem de Empréstimo Consignado"
            />
          </div>
        </>
      )}
      {imagePosition === "right" && (
        <>
          <div className={styles["image-section"]}>
            <Image
              className={styles.img}
              src={emprestimoImg}
              alt="Imagem de Empréstimo Consignado"
            />
          </div>
          <div className={styles["text-section"]}>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{paragraph}</p>
            <Link href="#header">
              <Button
                typeStyle="btn1"
                width="350px"
                text="Simular empréstimo"
              />
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default LoanInfo;

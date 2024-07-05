import React from "react";
import Image from "next/image";

import styles from './consined-loan-info.module.scss'

import emprestimoImg from "../../../assets/image/img/emprestimo-consignado.jpg";
import { Button } from "../../Form";

const ConsinedLoanInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h6 className={styles.subtitle}>Saiba mais</h6>
        <h1 className={styles.title}>O que é empréstimo consignado?</h1>
        <p className={styles.paragraph}>
          O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante.
        </p>
        <Button typeStyle="btn1" width="350px" text="Simular empréstimo"></Button>
      </div>
      <div className={styles["image-section"]}>
        <Image className={styles.img} src={emprestimoImg} alt="Imagem de Empréstimo Consignado" />
      </div>
    </section>
  );
};

export default ConsinedLoanInfo;

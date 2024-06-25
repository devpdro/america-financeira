import Image from "next/image";

import { Images } from "@/presentation/assets";

import styles from "./banks.module.scss";

const Banks = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Simule com facilidade, conheça as nossas opções <br /> de bancos que
        trabalhamos
      </h1>
      <div className={styles["image-section"]}>
        <img src={Images.BankBradesco.src} alt="test" />
        <img src={Images.BankCaixa.src} alt="test" />
        <img src={Images.BankSantander.src} alt="test" />
        <img src={Images.BankBrasil.src} alt="test" />
        <img src={Images.BankBanrisul.src} alt="test" />
        <img src={Images.logoSafra.src} alt="test" />
        <img src={Images.BankItau.src} alt="test" />
        <img src={Images.logoPan.src} alt="test" />
      </div>
    </section>
  );
};

export default Banks;

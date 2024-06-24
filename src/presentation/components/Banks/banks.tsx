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
        <img src={Images.logoBanrisul.src} alt="test" />
        <img src={Images.logoBradesco.src} alt="test" />
        <img src={Images.logoC6.src} alt="test" />
        <img src={Images.logoItau.src} alt="test" />
        <img src={Images.logoPan.src} alt="test" />
        <img src={Images.logoSafra.src} alt="test" />
        <img src={Images.logoSantander.src} alt="test" />
        <img src={Images.logoDaycoval.src} alt="test" />
      </div>
    </section>
  );
};

export default Banks;

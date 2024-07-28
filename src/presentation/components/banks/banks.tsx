import Image from "next/image";

import { BankItems } from "@/data";

import styles from "./banks.module.scss";

const Banks = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Simule com facilidade, conheça as nossas opções <br /> de bancos que
        trabalhamos
      </h1>
      <div className={styles["image-section"]}>
        {BankItems.map((bank, index) => (
          <Image
            width={180}
            height={0}
            key={index}
            src={bank.src}
            alt={bank.alt}
            className={styles.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Banks;

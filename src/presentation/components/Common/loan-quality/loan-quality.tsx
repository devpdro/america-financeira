import Image from "next/image";

import { LoanQualityItems } from "@/data";

import styles from "./loan-quality.module.scss";

const LoanQuality = () => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h1 className={styles.title}>
          O crédito de qualidade <br /> que você merece
        </h1>
        <p className={styles.subtitle}>
          Um empréstimo pode ser a solução financeira que você precisa 
          para melhorar sua vida.
        </p>
      </div>
      <div className={styles["details-section"]}>
        {LoanQualityItems.map((item, index) => (
          <div className={styles.box} key={index}>
            <Image
              src={item.image}
              className={styles["image-section"]}
              alt="Imagens ilustrativas"
            ></Image>
            <div className={styles["info-section"]}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanQuality;

import Image from "next/image";

import { creditDetailsItems } from "@/data";

import styles from "./credit-details.module.scss";

const CreditDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles["container-section"]}>
        <div className={styles["text-section"]}>
          <h1 className={styles.title}>
            O crédito de qualidade <br /> que você merece
          </h1>
          <p className={styles.subtitle}>
            Um empréstimo pode ser a solução financeira que você precisa <br />
            para melhorar sua vida.
          </p>
        </div>
        <div className={styles["details-section"]}>
          {creditDetailsItems.map((item, index) => (
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
      </div>
    </section>
  );
};

export default CreditDetails;

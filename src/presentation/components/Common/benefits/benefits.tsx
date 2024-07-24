import Image from "next/image";

import { LoanQualityItems } from "@/data";
import { BenefitsTypes } from "@/presentation/@types";

import styles from "./benefits.module.scss";

const Benefits: React.FC<BenefitsTypes> = ({ title, subtitle }) => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles["details-section"]}>
        {LoanQualityItems.map((item, index) => (
          <div className={styles.box} key={index}>
            <Image
              src={item.image}
              className={styles["image-section"]}
              alt="Imagens ilustrativas"
              width={500}
              height={500}
            />
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

export default Benefits;

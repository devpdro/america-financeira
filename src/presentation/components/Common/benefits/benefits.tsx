import Image from "next/image";

import { BenefitsItems } from "@/data";

import { BenefitsTypes } from "@/presentation/@types";

import styles from "./benefits.module.scss";

const Benefits: React.FC<BenefitsTypes> = ({
  title,
  subtitle,
  imageWidth,
  imageHeight,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles["details-section"]}>
        {BenefitsItems.map((item, index) => (
          <div
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
            className={styles.box}
            key={index}
          >
            <Image
              src={item.image}
              className={styles["image-section"]}
              alt="Imagens ilustrativas"
              width={imageWidth}
              height={imageHeight}
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

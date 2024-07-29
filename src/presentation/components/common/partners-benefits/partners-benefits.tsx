import Image from "next/image";

import { PartnersBenefitsTypes } from "@/presentation/@types";
import { LoanBenefitsItems } from "@/data";

import styles from "./partners-benefits.module.scss";

const PartnersBenefits: React.FC<PartnersBenefitsTypes> = ({
  subtitle,
  title,
}) => {
  return (
    <section className={styles.container}>
      <h1 className={styles["title-section"]}>{title}</h1>
      <h3 className={styles["subtitle-section"]}>{subtitle}</h3>
      <div className={styles["box-section"]}>
        {LoanBenefitsItems.map((item, index) => (
          <div className={styles.box} key={index}>
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                className={styles.img}
                width={100}
                height={100}
              />
            )}
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.paragraph}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersBenefits;

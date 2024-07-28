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
    <section
      className={styles.container}
      aria-labelledby="benefits-title"
      aria-describedby="benefits-subtitle"
    >
      <header className={styles["text-section"]}>
        <h1 id="benefits-title" className={styles.title}>
          {title}
        </h1>
        <p id="benefits-subtitle" className={styles.subtitle}>
          {subtitle}
        </p>
      </header>
      <div className={styles["details-section"]}>
        {BenefitsItems.map((item, index) => (
          <div
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
            className={styles.box}
            key={index}
            role="group"
            aria-labelledby={`benefit-title-${index}`}
            aria-describedby={`benefit-subtitle-${index}`}
          >
            <Image
              src={item.image}
              className={styles["image-section"]}
              alt={`Imagem ilustrativa de ${item.title}`}
              width={imageWidth}
              height={imageHeight}
            />
            <div className={styles["info-section"]}>
              <h2 id={`benefit-title-${index}`} className={styles.title}>
                {item.title}
              </h2>
              <p id={`benefit-subtitle-${index}`} className={styles.subtitle}>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

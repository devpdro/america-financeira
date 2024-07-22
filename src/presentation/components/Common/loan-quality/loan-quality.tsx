import Image from "next/image";
import { LoanQualityItems } from "@/data";
import styles from "./loan-quality.module.scss";

type LoanQualityProps = {
  titleSection: string;
  subtitleSection: string;
  image: string;
  title: string;
  subtitle: string;
};

const LoanQuality: React.FC<LoanQualityProps> = ({ titleSection, subtitleSection, image, title, subtitle }) => {
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
              width={500}  // Ajuste o valor conforme necessário
              height={500} // Ajuste o valor conforme necessário
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

export default LoanQuality;

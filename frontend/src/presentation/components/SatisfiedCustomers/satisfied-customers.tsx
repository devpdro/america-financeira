import { SatisfiedCustomersItems } from "@/data";

import styles from "./satisfied-customers.module.scss";

const SatisfiedCustomers = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles["title-section"]}>Quem usa recomenda</h1>
      <h6 className={styles["subtitle-section"]}>
        O que estão falando da América Financeira
      </h6>
      <div className={styles["testimonials-section"]}>
        {SatisfiedCustomersItems.map((item, index) => (
          <div key={index} className={styles.testimonial}>
            <p className={styles.paragraph}>{item.paragraph}</p>
            <div>
              <h6 className={styles.title}>{item.name}</h6>
              <p className={styles.subtitle}>{item.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfiedCustomers;

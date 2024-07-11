import styles from "./credit-benefits.module.scss";

type CreditBenefitsType = {
  numbering: number;
  title: string;
};

const CreditBenefits: React.FC<CreditBenefitsType> = ({ numbering, title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.numbering_box}>
        <h1 className={styles.number}>{numbering}</h1>
      </div>
      <div className={styles.texts_box}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default CreditBenefits;

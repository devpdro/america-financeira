import { Button } from "@/presentation/components/Form";

import styles from "./simulation.module.scss";

const Simulation = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <h1 className={styles["title-section"]}>
          Como ter acesso a seu crédito?
        </h1>
        <p className={styles["subtitle-section"]}>Veja como é fácil:</p>
        <div className={styles["box-section"]}>
          <div className={styles.box}>
            <h6 className={styles.subtitle}>1</h6>
            <h1 className={styles.title}>Faça uma simulação</h1>
            <p className={styles.paragraph}>
              Consulte suas condições de financiamento em diversas instituições
              bancárias
            </p>
          </div>
          <div className={styles.box}>
            <h6 className={styles.subtitle}>1</h6>
            <h1 className={styles.title}>Faça uma simulação</h1>
            <p className={styles.paragraph}>
              Consulte suas condições de financiamento em diversas instituições
              bancárias
            </p>
          </div>
          <div className={styles.box}>
            <h6 className={styles.subtitle}>1</h6>
            <h1 className={styles.title}>Faça uma simulação</h1>
            <p className={styles.paragraph}>
              Consulte suas condições de financiamento em diversas instituições
              bancárias
            </p>
          </div>
        </div>
        <Button typeStyle="btn3" text="Simular empréstimo"></Button>
      </div>
    </section>
  );
};

export default Simulation;

import { FgtsAdvanceRequest } from "@/presentation/components/form";

import styles from "./fgts-simulation.module.scss";

const FgtsSimulation = () => {
  return (
    <section className={styles.container}>
      <div className={styles["text-box"]}>
        <div className={styles["title-box"]}>
          <h6 className={styles.subtitle}>Faça sua simulação</h6>
          <h1 className={styles.title}>
            Saiba quanto você pode antecipar do seu FGTS
          </h1>
        </div>
        <div className={styles["description-box"]}>
          <p className={styles.paragraph}>
            Os valores nesta simulação são sem IOF e são cálculos de acordo com
            dados médios oferecidos pela América Financeira e podem mudar de
            acordo com o seu saldo no FGTS
          </p>
        </div>
      </div>
      <div className={styles["form-box"]}>
        <FgtsAdvanceRequest />
      </div>
    </section>
  );
};

export default FgtsSimulation;

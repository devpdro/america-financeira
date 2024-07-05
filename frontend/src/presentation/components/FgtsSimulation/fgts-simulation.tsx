import React from "react";

import styles from './fgts-simulation.module.scss'
import FgtsAdvanceRequest from "../Form/FgtsAdvanceRequest/fgts-advance-request";

const FgtsSimulation = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["text-box"]}>
          <h6 className={styles.subtitle}>Faça sua simulação</h6>
          <h1 className={styles.title}>Saiba quanto você pode antecipar do seu FGTS</h1>
          <p className={styles.paragraph}>
            Os valores apresentados nesta simulação são sem IOF e são cálculos
            de acordo com dados médios oferecidos pela América Financeira e
            podem mudar de acordo com o seu saldo no FGTS
          </p>
        </div>
        <div className={styles["form-box"]}>
            <FgtsAdvanceRequest />
        </div>
      </div>
    </section>
  );
};

export default FgtsSimulation;

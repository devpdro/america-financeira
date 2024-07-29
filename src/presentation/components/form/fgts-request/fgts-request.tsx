import { Button, Input } from "@/presentation/components/form";

import styles from "./fgts-request.module.scss";

const FgtsRequest = () => {
  return (
    <section className={styles.container}>
      <form className={styles["simulation-box"]}>
        <div className={styles["input-box"]}>
          <label className={styles.label} htmlFor="saldo-fgts">
            Qual é o seu saldo do FGTS?
          </label>
          <Input
            typeStyle="input-normal"
            placeHolder="Insira o valor"
            width="400px"
          />

          <label className={styles.label} htmlFor="mes-aniversario">
            Seu mês de aniversário
          </label>
          <Input typeStyle="input-normal" placeHolder="" width="400px" />
        </div>
      </form>
      <div className={styles["box-section"]}>
        <Button typeStyle="btn1" width="250px" text="Quero contratar"></Button>
      </div>
    </section>
  );
};

export default FgtsRequest;

import { Icons } from "@/presentation/assets";
import styles from "./access-login.module.scss";
import { Button } from "../Form";

const AccessLogin = () => {
  return (
    <main className={styles.container}>
      <Icons.FaArrowLeft className={styles.icon} />
      <form className={styles["form-section"]}>
        <fieldset>
          <legend className={styles.title}>
            Pra acessar <br /> a Área do Funcionário, precisamos <br />
            do seu CPF.
          </legend>
          <input
            className={styles["input-text"]}
            type="text"
            placeholder="Digite seu CPF para continuar"
          />{" "}
          <Button typeStyle="btn3" width="100%" text="Entrar" />
        </fieldset>
      </form>
    </main>
  );
};

export default AccessLogin;

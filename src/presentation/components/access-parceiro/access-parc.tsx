import Image from "next/image";

import { LoginRequest, Button } from "@/presentation/components/Form";
import { Images } from "@/presentation/assets";

import styles from "./access-pard.module.scss";

const AccessParc = () => {
  return (
    <main className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["text-section"]}>
          <h1 className={styles.title}>
            Pra acessar <br /> a Área dos Colaboradores, precisamos <br /> do
            seu Código de Segurança.
          </h1>
          <input
            placeholder="Digite seu Código de Segurança"
            className={styles["input-text"]}
            type="text"
            name=""
            id=""
          />
          <Button typeStyle="btn3" text="Entrar" width="100%" />
        </div>
        <div className={styles["form-section"]}>
          <LoginRequest />
        </div>
      </div>
    </main>
  );
};

export default AccessParc;

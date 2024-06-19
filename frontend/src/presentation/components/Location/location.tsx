import Image from "next/image";

import { Images } from "@/presentation/assets";
import { Button } from "@/presentation/components/Form";

import styles from "./location.module.scss";

const Location = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["image-section"]}>
          <img className={styles.img} src={Images.payrollLoan.src} alt="teste" />
        </div>
        <div className={styles["text-section"]}>
          <h1 className={styles.title}>
            Prefere atendimento presencial? Conheça nossas unidades localizadas
            perto de você!
          </h1>
          <p className={styles.subtitle}>
            Mais de 10 unidades espalhadas pelo Brasil. Venha nós conhecer e
            tomar um café!
          </p>
          <Button type="btn2" text="Localize a loja mais próxima"></Button>
        </div>
      </div>
    </section>
  );
};

export default Location;

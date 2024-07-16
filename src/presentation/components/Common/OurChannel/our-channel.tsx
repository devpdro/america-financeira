import { Button } from "@/presentation/components/Form";

import styles from "./our-channel.module.scss";

const OurChannel = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <h1 className={styles.title}>
          Fique por dentro <br /> de todas novidades <br /> e comunicados <br />
        </h1>
        <div className={styles["box-section"]}>
          <p className={styles.paragraph}>
            Fique por dentro de todas as novidades da América Financeira e
            <br />
            comunicados sobre nossos produtos, te espero lá!
          </p>
          <Button
            typeStyle="btn2"
            text="Entrar no nosso instagram"
            width="500px"
          />
        </div>
      </div>
    </section>
  );
};

export default OurChannel;

import Link from "next/link";
import Image from "next/image";

import { Images } from "@/presentation/assets";

import styles from "./blog-initial.module.scss";

const BlogInitial = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={styles["text-section"]}>
        <p className={styles["subtitle-section"]}>Nossas últimas postagens</p>
        <h1 className={styles["title-section"]}>
          Acompanhe nossas novidades <br /> e dicas!
        </h1>
      </div>
      <div className={styles.news}>
        <Link className={styles.link} href="">
          <div className={styles.article}>
            <Image
              className={styles.img}
              src={Images.InvestmentBanks}
              alt="Empréstimos"
            />
            <p className={styles.subtitle}>Empréstimos</p>
            <h1 className={styles.title}>
              Como fazer uma simulação para empréstimo FGTS
            </h1>
            <p className={styles.data}>11 de março de 2024</p>
          </div>
        </Link>
        <Link className={styles.link} href="">
          <div className={styles.article}>
            <Image
              className={styles.img}
              loading="lazy"
              src={Images.CellPhoneInsurance}
              alt="Sistema"
            />
            <p className={styles.subtitle}>Investimentos</p>
            <h1 className={styles.title}>
              CDB: Tudo o que você precisa saber sobre e como investir!
            </h1>
            <p className={styles.data}>21 de julho de 2024</p>
          </div>
        </Link>
        <Link className={styles.link} href="">
          <div className={styles.article}>
            <Image
              className={styles.img}
              loading="lazy"
              src={Images.CardDebit}
              alt="Web Design"
            />
            <p className={styles.subtitle}>Cartão de Crédito</p>
            <h1 className={styles.title}>
              Pagar boleto no cartão de crédito é possível?
            </h1>
            <p className={styles.data}>21 de janeiro de 2024</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogInitial;

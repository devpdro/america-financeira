import Link from "next/link";

import styles from "./blog-most-reads.module.scss";

import { Images } from "@/presentation/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";

const BlogMostReads: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Mais recentes</h1>
      <div className={styles["container-section"]}>
        <div className={styles["cards"]}>
          <div className={`${styles["card"]} ${styles["content"]}`}>
            <div className={styles["card-content"]}>
              <div className={styles["card-img"]}>
                <Link href="/blog/tudo-sobre-emprestimos">
                  <Image
                    className={styles.img}
                    src={Images.pessoaComCelular}
                    alt="Imagem do artigo sobre empréstimos"
                  />
                </Link>
              </div>
              <div className={styles["card-label"]}>Finanças</div>
              <div className={styles["card-title"]}>
                Tudo o que você precisa saber sobre empréstimos
              </div>
            </div>
          </div>
          <div className={`${styles["card"]} ${styles["content"]}`}>
            <div className={styles["card-content"]}>
              <div className={styles["card-img"]}>
                <Link href="/blog/simulacao-fgts-tudo-que-voce-precisa-saber">
                  <Image
                    src={Images.pessoaSozinha}
                    alt="Imagem do artigo sobre simulação de FGTS"
                  />
                </Link>
              </div>
              <div className={styles["card-label"]}>Investimentos</div>
              <div className={styles["card-title"]}>
                Simulação de FGTS: Tudo o que você precisa saber
              </div>
            </div>
          </div>
          <div className={`${styles["card"]} ${styles["content"]}`}>
            <div className={styles["card-content"]}>
              <div className={styles["card-img"]}>
                <Link href="/blog/cdb-tudo-que-voce-precisa-saber-para-investir">
                  <Image
                    src={Images.tresPessoasSimulacao}
                    alt="Imagem do artigo sobre CDB"
                  />
                </Link>
              </div>
              <div className={styles["card-label"]}>Investimentos</div>
              <div className={styles["card-title"]}>
                CDB: Tudo que você precisa saber para investir
              </div>
            </div>
          </div>
          <div className={`${styles["card"]} ${styles["form"]}`}>
            <div className={styles["card-img"]}>
              <Link href="/blog/cdb-tudo-que-voce-precisa-saber-para-investir">
                <Image
                  src={Images.tresPessoasSimulacao}
                  alt="Imagem do artigo sobre CDB"
                />
              </Link>
            </div>
            <div className={styles["card-label"]}>Investimentos</div>
            <div className={styles["card-title"]}>
              CDB: Tudo que você precisa saber para investir
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMostReads;

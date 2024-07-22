"use client";
import React, { useState } from "react";
import styles from "./fgts-simulation.module.scss";
import { Button } from "../form";

const FgtsSimulation = () => {
  const [saldo, setSaldo] = useState(0);
  const [mesAniversario, setMesAniversario] = useState(1);

  const incrementarSaldo = () => {
    setSaldo((prevSaldo) => prevSaldo + 100);
  };

  const decrementarSaldo = () => {
    setSaldo((prevSaldo) => (prevSaldo > 0 ? prevSaldo - 100 : 0));
  };

  const incrementarMes = () => {
    setMesAniversario((prevMes) => (prevMes < 12 ? prevMes + 1 : 1));
  };

  const decrementarMes = () => {
    setMesAniversario((prevMes) => (prevMes > 1 ? prevMes - 1 : 12));
  };

  const calcularValor = (saldo: number) => {
    return saldo * 0.721274;
  };

  const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Seu dinheiro pode virar mais <br /> dinheiro
      </h1>
      <p className={styles.subtitle}>
        O seu dinheiro com rendimento maior que a poupança, a 100% do CDI e
        <br />
        disponível para qualquer momento
      </p>
      <div className={styles["form-container"]}>
        <div className={styles["form-section"]}>
          <div className={styles["balance-section"]}>
            <h6 className={styles["title-form"]}>Qual é seu saldo do FGTS?</h6>
            <input
              className={styles["input-placeholder"]}
              type="text"
              value={`R$ ${saldo}`}
              readOnly
            />
            <button className={styles["btn"]} onClick={decrementarSaldo}>
              -
            </button>
            <button className={styles["btn"]} onClick={incrementarSaldo}>
              +
            </button>
          </div>
          <div className={styles["balance-section"]}>
            <h6 className={styles["title-form"]}>Seu mês de aniversário</h6>
            <input
              className={styles["input-placeholder"]}
              type="text"
              value={nomeMeses[mesAniversario - 1]}
              readOnly
            />
            <button className={styles["btn"]} onClick={decrementarMes}>
              -
            </button>
            <button className={styles["btn"]} onClick={incrementarMes}>
              +
            </button>
          </div>
        </div>
        <div className={styles["result-section"]}>
          <h6 className={styles["title-form"]}>Você pode antecipar até</h6>
          <p className={styles["result"]}>
            R$ {calcularValor(saldo).toFixed(2)}
          </p>
          <p className={styles.paragraph}>
            Os valores apresentados nesta simulação são sem IOF e são calculados
            de acordo com dados médios oferecidos pelo bancos e podem mudar
            de acordo com o seu saldo no FGTS.
          </p>
          <Button typeStyle="btn1" text="Quero contratar" width="350px" />
        </div>
      </div>
    </section>
  );
};

export default FgtsSimulation;

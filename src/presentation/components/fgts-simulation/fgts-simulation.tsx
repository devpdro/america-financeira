"use client";
import React, { useState } from "react";
import styles from "./fgts-simulation.module.scss";

const FgtsSimulation = () => {
  const [saldo, setSaldo] = useState("");
  const [mesAniversario, setMesAniversario] = useState("");
  const [valorAntecipar, setValorAntecipar] = useState(null);

  const calcularAntecipacao = () => {
    // Simulação simples: vamos assumir que o usuário pode antecipar 50% do saldo do FGTS.
    const saldoNumerico = parseFloat(saldo.replace(/[^0-9.-]+/g, ""));
    if (isNaN(saldoNumerico)) {
      alert("Por favor, insira um saldo válido.");
      return;
    }

    const valorCalculado = saldoNumerico * 0.721274;
    // Define o valor final, garantindo que ele não ultrapasse R$ 1.000
    const valorFinal = Math.min(valorCalculado);

    setValorAntecipar(valorFinal.toFixed(2));
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Seu dinheiro pode virar mais dinheiro</h1>
      <p className={styles.subtitle}>
        O seu dinheiro com rendimento maior que a poupança, a 100% do CDI e <br />
        disponível para qualquer momento
      </p>
      <div>
        <div>
          <h6>Qual é seu saldo do FGTS?</h6>
          <input
            type="text"
            value={saldo}
            onChange={(e) => setSaldo(e.target.value)}
            placeholder="R$ 23.213,00"
          />
          <h6>Seu mês de aniversário</h6>
          <select
            value={mesAniversario}
            onChange={(e) => setMesAniversario(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="janeiro">Janeiro</option>
            <option value="fevereiro">Fevereiro</option>
            <option value="marco">Março</option>
            <option value="abril">Abril</option>
            <option value="maio">Maio</option>
            <option value="junho">Junho</option>
            <option value="julho">Julho</option>
            <option value="agosto">Agosto</option>
            <option value="setembro">Setembro</option>
            <option value="outubro">Outubro</option>
            <option value="novembro">Novembro</option>
            <option value="dezembro">Dezembro</option>
          </select>
        </div>
        <button onClick={calcularAntecipacao}>Calcular</button>
        <div>
          {valorAntecipar !== null && (
            <div>
              <h6>Você pode antecipar até:</h6>
              <p>R$ {valorAntecipar}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FgtsSimulation;

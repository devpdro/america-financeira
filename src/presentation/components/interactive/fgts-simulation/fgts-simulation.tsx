'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/presentation/components/form'

import styles from './fgts-simulation.module.scss'

const FgtsSimulation = () => {
  const [saldo, setSaldo] = useState(0)
  const [mesAniversario, setMesAniversario] = useState(1)

  const incrementarSaldo = () => {
    setSaldo((prevSaldo) => prevSaldo + 100)
  }

  const decrementarSaldo = () => {
    setSaldo((prevSaldo) => (prevSaldo > 0 ? prevSaldo - 100 : 0))
  }

  const incrementarMes = () => {
    setMesAniversario((prevMes) => (prevMes < 12 ? prevMes + 1 : 1))
  }

  const decrementarMes = () => {
    setMesAniversario((prevMes) => (prevMes > 1 ? prevMes - 1 : 12))
  }

  const calcularValor = (saldo: number, mesAniversario: number) => {
    const mesAtual = new Date().getMonth() + 1 // Meses de 1 a 12
    const diffMes = mesAniversario - mesAtual

    let fatorAjuste = 1 // Fator base

    if (diffMes > 0) {
      // Mês de aniversário é posterior ao mês atual
      fatorAjuste = 1 + diffMes * 0.01 // Exemplo: 1% a mais por mês
    } else if (diffMes < 0) {
      // Mês de aniversário é anterior ao mês atual
      fatorAjuste = 1 - Math.abs(diffMes) * 0.01 // Exemplo: 1% a menos por mês
    }

    return saldo * 0.721274 * fatorAjuste
  }

  const nomeMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  return (
    <section className={styles.container}>
      <div className={styles['box-container']}>
        <h1 className={styles.title}>
          Descubra quanto você pode antecipar <br /> com seu FGTS
        </h1>
        <p className={styles.subtitle}>
          Simule a antecipação do FGTS e veja o valor <br /> baseado no saldo e mês de aniversário.
        </p>
        <div className={styles['form-container']}>
          <div className={styles['form-section']}>
            <div className={styles['balance-section']}>
              <h6 className={styles['title-form']}>Qual é seu saldo do FGTS?</h6>
              <input className={styles['input-placeholder']} type="text" value={`R$ ${saldo}`} readOnly />
              <button className={styles['btn']} onClick={decrementarSaldo}>
                -
              </button>
              <button className={styles['btn']} onClick={incrementarSaldo}>
                +
              </button>
            </div>
            <div className={styles['balance-section']}>
              <h6 className={styles['title-form']}>Seu mês de aniversário</h6>
              <input
                className={styles['input-placeholder']}
                type="text"
                value={nomeMeses[mesAniversario - 1]}
                readOnly
              />
              <button className={styles['btn']} onClick={decrementarMes}>
                -
              </button>
              <button className={styles['btn']} onClick={incrementarMes}>
                +
              </button>
            </div>
          </div>
          <div className={styles['result-section']}>
            <h6 className={styles['title-form']}>Você pode antecipar até</h6>
            <p className={styles['result']}>R$ {calcularValor(saldo, mesAniversario).toFixed(2)}</p>
            <p className={styles.paragraph}>
              Os valores simulados não incluem IOF e são baseados em dados médios. Eles podem variar de acordo com o
              saldo do FGTS e o mês de aniversário. Para uma simulação exata, entre em contato conosco.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Quero%20antecipar%20meu%20FGTS."
              target="_blank"
            >
              <Button typeStyle="btn1" text="Quero contratar" width="350px" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FgtsSimulation

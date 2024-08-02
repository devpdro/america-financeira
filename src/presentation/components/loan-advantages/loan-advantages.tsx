import styles from './loan-advantages.module.scss'

const LoanAdvantages = () => {
  return (
    <section className={styles.container}>
      <div className={styles['text-section']}>
        <h6 className={styles.subtitle}>Estrategia america financeira</h6>
        <h1 className={styles.title}>Por que contratar o Empréstimo Consignado da América Financeira?</h1>
        <span className={styles.paragraph}>Simular credito</span>
      </div>
      <div className={styles['benefits-section']}>
        <div className={styles['box']}>
          <h4 className={styles.title}>Parcelas feitas pra voce</h4>
          <p className={styles.paragraph}>Taxas até 3x menores quando comparadas com outros tipos de empréstimo.</p>
        </div>
        <div className={styles['box']}>
          <h4 className={styles.title}>Contratação segura</h4>
          <p className={styles.paragraph}>
            Todo o processo é 100% online. Contrate da sua casa pelo site ou com umas das atendentes.
          </p>
        </div>
        <div className={styles['box']}>
          <h4 className={styles.title}>Receba em até 30 min</h4>
          <p className={styles.paragraph}>Assim que aprovado, seu Empréstimo Conisnado cai rápido na sua conta.</p>
        </div>
        <div className={styles['box']}>
          <h4 className={styles.title}>Sem preocupação</h4>
          <p className={styles.paragraph}>
            As parcelas são descontadas diretamente da sua folha de pagamento em até 84x.q
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoanAdvantages

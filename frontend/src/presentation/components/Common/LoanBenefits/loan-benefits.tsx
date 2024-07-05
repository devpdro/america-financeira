import React from 'react'

import styles from './loan-benefits.module.scss'

const LoanBenefits = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles["title-section"]}>Vantagens do Empréstimo FGTS</h1>
        <div className={styles["box-section"]}>
            <div className={styles["box"]}>
                <h1 className={styles.title}>Receba no mesmo dia</h1>
                <p className={styles.paragraph}>São 10 parcelas anuais do seu Saque-aniversario direto na sua conta de uma vez</p>
            </div>
            <div className={styles["box"]}>
                <h1 className={styles.title}>Receba no mesmo dia</h1>
                <p className={styles.paragraph}>São 10 parcelas anuais do seu Saque-aniversario direto na sua conta de uma vez</p>
            </div>
            <div className={styles["box"]}>
                <h1 className={styles.title}>Receba no mesmo dia</h1>
                <p className={styles.paragraph}>São 10 parcelas anuais do seu Saque-aniversario direto na sua conta de uma vez</p>
            </div>
            <div className={styles["box"]}>
                <h1 className={styles.title}>Receba no mesmo dia</h1>
                <p className={styles.paragraph}>São 10 parcelas anuais do seu Saque-aniversario direto na sua conta de uma vez</p>
            </div>
        </div>
    </section>
  )
}

export default LoanBenefits

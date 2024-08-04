import React from 'react'

import styles from './loan-benefits.module.scss'

import { ConsignedCarousel } from '@/presentation/components/interactive'

const LoanBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-container']}>
        <div className={styles['box-text']}>
          <h1 className={styles.title}>Vantagens do Empréstimo Consignado</h1>
        </div>
        <div className={styles['box-carousel']}>
          <ConsignedCarousel />
        </div>
      </div>
    </section>
  )
}

export default LoanBenefits

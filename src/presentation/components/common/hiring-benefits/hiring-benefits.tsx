import React from 'react'

import styles from './hiring-benefits.module.scss'

import CarouselConsigned from '../../carousel/consigned-carousel/consigned-carousel'

const HiringBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-container']}>
        <div className={styles['box-text']}>
          <h1 className={styles.title}>Vantagens do Empréstimo Consignado</h1>
        </div>
        <div className={styles['box-carousel']}>
          <CarouselConsigned />
        </div>
      </div>
    </section>
  )
}

export default HiringBenefits

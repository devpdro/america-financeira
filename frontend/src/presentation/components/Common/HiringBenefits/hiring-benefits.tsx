import React from 'react'

import styles from './hiring-benefits.module.scss'
import { Button } from '../../Form'
import CarouselConsigned from '../../Carousel/CarouselConsigned/carousel-consigned'

const HiringBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["box-text"]} >
            <h1>Vantagens do Crédito Consignado</h1>
            <h1>Por que contratar o Emprèstimo Consignado do PAN?</h1>
            <Button typeStyle='btn1' width='350px' text='Quero contratar'></Button>
            <p>Sujeito à analise de crédito e condições do produto</p>
        </div>
        <div className={styles["box-carousel"]}>
            <CarouselConsigned/>
        </div>
      </div>
    </section>
  )
}

export default HiringBenefits

import Image from 'next/image'

import { bankLogos } from '@/data/ui'

import styles from './banks.module.scss'

const Banks = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Simule com facilidade, conheça as nossas <br /> opções de bancos que trabalhamos
      </h1>
      <div className={styles['image-section']}>
        {bankLogos.map((item, index) => (
          <Image width={180} height={0} key={index} src={item.src} alt={item.alt} className={styles.img} />
        ))}
      </div>
    </section>
  )
}

export default Banks

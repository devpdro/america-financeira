'use client'

import Image from 'next/image'
import { BenefitsProps } from '@/data/models'
import { gsap } from 'gsap'

import styles from './benefits.module.scss'

const Benefits: React.FC<BenefitsProps> = ({ title, subtitle, imageWidth, imageHeight, items }) => {
  return (
    <section
      className={`${styles.container}`}
      aria-labelledby="beneficios-titulo"
      aria-describedby="beneficios-subtitulo"
    >
      <header className={styles['text-section']}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>
      <div className={styles['details-section']}>
        {items.map((item, index) => (
          <div
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
            className={styles.box}
            key={index}
            role="group"
            aria-labelledby={`beneficio-titulo-${index}`}
            aria-describedby={`beneficio-subtitulo-${index}`}
          >
            <Image
              src={item.image}
              className={styles['image-section']}
              alt={`Imagem ilustrativa de ${item.title}`}
              width={imageWidth}
              height={imageHeight}
            />
            <div className={styles['info-section']}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits

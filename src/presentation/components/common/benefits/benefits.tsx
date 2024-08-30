'use client'

import Image from 'next/image'
import { BenefitsProps } from '@/data/models'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger' // Importa o ScrollTrigger
import styles from './benefits.module.scss'

// Registra o ScrollTrigger com o GSAP
gsap.registerPlugin(ScrollTrigger)

const Benefits: React.FC<BenefitsProps> = ({ title, subtitle, imageWidth, imageHeight, items }) => {
  const sectionRef = useRef(null) // Referência ao elemento do componente

  useEffect(() => {
    const el = sectionRef.current

    // Configuração do GSAP para animação de deslizar
    gsap.fromTo(
      el,
      { x: -100, opacity: 0 }, // Valores iniciais de x e opacidade
      {
        x: 0,
        opacity: 1,
        duration: 0.8, // Duração da animação
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', // Inicia quando o topo do elemento atinge o fundo da viewport
          end: 'bottom top', // Termina quando o fundo do elemento atinge o topo da viewport
          toggleActions: 'play none none none', // Controla as ações de entrada e saída
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className={styles.container}
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

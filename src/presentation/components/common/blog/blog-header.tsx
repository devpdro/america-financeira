import React from 'react'

import styles from './blog-header.module.scss'

import { Images } from '@/presentation/assets'
import Image from 'next/image'

export type BlogHeader = {
  imageWidth?: number
  imageHeight?: number
}

const BlogHeader: React.FC<BlogHeader> = ({ imageWidth, imageHeight }) => {
  return (
    <section className={styles.container}>
      <div className={styles['box-container']}>
        <div className={styles['text-section']}>
          <h3 className={styles.subtitle}>Tecnologia</h3>
          <h1 className={styles.title}>Conheça os tipos de software e como cada um deles funciona</h1>
          <p className={styles.paragraph}>25 de março de 2024</p>
        </div>
        <div className={styles['image-section']} style={{ width: `${100}%`, height: `${100}%` }}>
          <Image
            width={imageWidth}
            height={imageHeight}
            className={styles.img}
            src={Images.cabecalhoInicial}
            alt="Imagem cabeçalho blog"
          />
        </div>
      </div>
    </section>
  )
}

export default BlogHeader

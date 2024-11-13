'use client'

import Image from 'next/image'

import S from './benefits.module.scss'

type ItemProps = {
  title: string
  subtitle: string
  image: string
}

type BenefitsProps = {
  title: string
  subtitle: string
  imageWidth: number
  imageHeight: number
  items: ItemProps[]
}

const Benefits = ({ title, subtitle, imageWidth, imageHeight, items }: BenefitsProps) => {
  return (
    <div className={`${S.container}`}>
      <header className={S['text-section']}>
        <h1 className={S.title}>{title}</h1>
        <p className={S.subtitle}>{subtitle}</p>
      </header>
      <div className={S['details-section']}>
        {items.map(({ title, subtitle, image }, key) => (
          <div style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }} className={S.box} key={key} role="group">
            <Image
              src={image}
              className={S['image-section']}
              alt={`Imagem ilustrativa de ${title}`}
              width={imageWidth}
              height={imageHeight}
            />
            <div className={S['info-section']}>
              <h2 className={S.title}>{title}</h2>
              <p className={S.subtitle}>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits

import Link from 'next/link'
import Image from 'next/image'

import { Icons } from '@/presentation/assets'

import styles from './info-panel.module.scss'

export type InfoPanelProps = {
  image: string
  alt: string
  title: string
  subtitle: string
  paragraph: string
  imageWidth: number
  imageHeight: number
  imagePosition: 'left' | 'right'
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  image,
  alt,
  title,
  subtitle,
  paragraph,
  imageWidth,
  imageHeight,
  imagePosition,
}) => {
  return (
    <section className={styles.container} aria-labelledby="info-panel-titulo" aria-describedby="info-panel-subtitulo">
      {imagePosition === 'left' && (
        <div className={styles['box-section']}>
          <div className={styles['text-section']}>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <div className={styles['link-section']}>
              <Link
                href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Estou%20interessado%20no%20cart%C3%A3o%20de%20cr%C3%A9dito."
                aria-label={`Saiba mais sobre ${title}`}
                target="_blank"
              >
                <span className={styles.paragraph}>{paragraph}</span>
              </Link>
              <Icons.FaArrowRight className={styles.icon} aria-hidden="true" />
            </div>
          </div>
          <div className={styles['image-section']}>
            <Image
              className={styles.img}
              width={100}
              height={100}
              src={image}
              layout="responsive"
              alt={alt}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
      {imagePosition === 'right' && (
        <div className={styles['box-section']}>
          <div className={styles['image-section']} style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}>
            <Image
              className={styles.img}
              width={imageWidth}
              height={imageHeight}
              src={image}
              layout="responsive"
              alt={alt}
              aria-hidden="true"
            />
          </div>
          <div className={styles['text-section']}>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <div className={styles['link-section']}>
              <Link
                href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Quero%20antecipar%20meu%20FGTS."
                target="_blank"
                aria-label={`Saiba mais sobre ${title}`}
              >
                <span className={styles.paragraph}>{paragraph}</span>
              </Link>
              <Icons.FaArrowRight className={styles.icon} aria-hidden="true" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default InfoPanel

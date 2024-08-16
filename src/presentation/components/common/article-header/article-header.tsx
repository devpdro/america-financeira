import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/presentation/components/form'

import styles from './introduction-header.module.scss'

export type IntroductionHeaderProps = {
  image: string
  alt: string
  title: string
  subtitle: string
  paragraph: string
  buttonPrimaryText: string
  imageWidth: number
  imageHeight: number
  imagePosition: 'left' | 'right'
}

const ArticleHeader: React.FC<IntroductionHeaderProps> = ({
  image,
  alt,
  title,
  subtitle,
  paragraph,
  buttonPrimaryText,
  imageWidth,
  imageHeight,
  imagePosition,
}) => {
  return (
    <header className={styles.container}>
      {imagePosition === 'left' && (
        <>
          <div className={styles['image-section']} style={{ width: `${imageWidth}%`, height: `${100}%` }}>
            <Image
              className={styles.img}
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              layout="responsive"
            />
          </div>
          <div className={styles['text-section']}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{paragraph}</p>
            <Link href="/formulario-seja-parceiro" target="_blank" aria-label={`Saiba mais sobre ${title}`}>
              <Button typeStyle="btn1" text={buttonPrimaryText} width="300px" />
            </Link>
          </div>
        </>
      )}
      {imagePosition === 'right' && (
        <>
          <div className={styles['text-section']}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{paragraph}</p>
            <Link
              href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!"
              target="_blank"
              aria-label={`Saiba mais sobre ${title}`}
            >
              <Button typeStyle="btn2" text={buttonPrimaryText} width="300px" />
            </Link>
          </div>
          <div className={styles['image-section']} style={{ width: `${imageWidth}%`, height: `${40}%` }}>
            <Image
              className={styles.img}
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              layout="responsive"
            />
          </div>
        </>
      )}
    </header>
  )
}

export default ArticleHeader

import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/presentation/components/form'

import styles from './blog-header.module.scss'

export type BlogHeaderProps = {
  image: string
  alt: string
  title: string
  subtitle: string
  paragraph: string
  buttonPrimaryText: string
  imageWidth: number
  imageHeight: number
  linkHref: string
  imagePosition: 'left' | 'right'
  openInNewTab: boolean
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  image,
  alt,
  title,
  subtitle,
  paragraph,
  buttonPrimaryText,
  imageWidth,
  imageHeight,
  linkHref,
  imagePosition,
  openInNewTab = true,
}) => {
  return (
    <section className={styles.container}>
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
            <Link href={linkHref} target={openInNewTab ? '_blank' : '_self'} aria-label={`Saiba mais sobre ${title}`}>
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
    </section>
  )
}

export default BlogHeader

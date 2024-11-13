import Link from 'next/link'
import Image from 'next/image'

import { Button } from 'src/presentation/components'

import S from './article-header.module.scss'

type ArticleHeaderProps = {
  title: string
  subtitle: string
  paragraph: string
  image: string
  alt: string
  label: string
  width: number
  height: number
  position: 'left' | 'right'
}

const ArticleHeader = ({ image, alt, title, subtitle, paragraph, label, width, height, position }: ) => (
  <div className={S.container}>
    {position === 'left' && (
      <>
        <div className={S['image-section']} style={{ width: `${width}%`, height: `${100}%` }}>
          <Image className={S.img} src={image} alt={alt} width={width} height={height} layout="responsive" />
        </div>
        <div className={S['text-section']}>
          <h3 className={S.subtitle}>{subtitle}</h3>
          <h1 className={S.title}>{title}</h1>
          <p className={S.paragraph}>{paragraph}</p>
          <Link href="/formulario-seja-parceiro" target="_blank">
            <Button typeStyle="btn1" label={label} width="300px" />
          </Link>
        </div>
      </>
    )}
    {position === 'right' && (
      <>
        <div className={S['text-section']}>
          <h3 className={S.subtitle}>{subtitle}</h3>
          <h1 className={S.title}>{title}</h1>
          <p className={S.paragraph}>{paragraph}</p>
          <Link
            href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!"
            target="_blank"
          >
            <Button typeStyle="btn2" label={label} width="300px" />
          </Link>
        </div>
        <div className={S['image-section']} style={{ width: `${width}%`, height: `${40}%` }}>
          <Image className={S.img} src={image} alt={alt} width={width} height={height} layout="responsive" />
        </div>
      </>
    )}
  </div>
)

export default ArticleHeader

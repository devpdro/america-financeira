import Link from 'next/link'
import Image from 'next/image'

import { ICON } from 'src/presentation/assets'

import S from './panel.module.scss'

type PanelProps = {
  image: string
  alt: string
  title: string
  subtitle: string
  paragraph: string
  imageWidth: number
  imageHeight: number
  imagePosition: 'left' | 'right'
}

const Panel = ({ image, alt, title, subtitle, paragraph, imageWidth, imageHeight, imagePosition }: PanelProps) => (
  <>
    {imagePosition === 'left' && (
      <div className={S.container}>
        <div className={S['text-section']}>
          <h1 className={S.title}>{title}</h1>
          <h6 className={S.subtitle}>{subtitle}</h6>
          <div className={S['link-section']}>
            <Link
              href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Estou%20interessado%20no%20cart%C3%A3o%20de%20cr%C3%A9dito."
              target="_blank"
            >
              <span className={S.paragraph}>{paragraph}</span>
            </Link>
            <ICON.FaArrowRight className={S.icon} />
          </div>
        </div>
        <div className={S['image-section']}>
          <Image className={S.img} width={100} height={100} src={image} alt={alt} layout="responsive" />
        </div>
      </div>
    )}
    {imagePosition === 'right' && (
      <div className={S['box-section']}>
        <div className={S['image-section']} style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}>
          <Image className={S.img} width={imageWidth} height={imageHeight} src={image} alt={alt} layout="responsive" />
        </div>
        <div className={S['text-section']}>
          <h1 className={S.title}>{title}</h1>
          <h6 className={S.subtitle}>{subtitle}</h6>
          <div className={S['link-section']}>
            <Link
              href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!%20Quero%20antecipar%20meu%20FGTS."
              target="_blank"
            >
              <span className={S.paragraph}>{paragraph}</span>
            </Link>
            <ICON.FaArrowRight className={S.icon} />
          </div>
        </div>
      </div>
    )}
  </>
)

export default Panel

import { StaticImageData } from 'next/image'

import { LoanRequest } from 'src/presentation/components/form'

import S from './header.module.scss'

type HeaderProps = {
  title: string
  subtitle: string
  paragraph: string
  image: string | StaticImageData
}

const Header = ({ title, subtitle, image, paragraph }: HeaderProps) => (
  <header
    className={S.container}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className={S['box-section']}>
      <div className={S['text-section']}>
        <h6 className={S.subtitle}>{title}</h6>
        <h1 className={S.title}>{subtitle}</h1>
        {paragraph && <p className={S.paragraph}>{paragraph}</p>}
      </div>

      <div className={S['form-section']}>
        <LoanRequest />
      </div>
    </div>
  </header>
)

export default Header

import Image, { StaticImageData } from 'next/image'

import { IMAGE } from 'src/presentation/assets'

import classNames from 'classnames'

import S from './team.module.scss'

const TEAMPHOTOS = [
  { src: IMAGE.equipeUnida, alt: 'Equipe unida posando para foto' },
  { src: IMAGE.equipeFotoFinal, alt: 'Foto final da equipe em evento de confraternização' },
  { src: IMAGE.equipeOlhandoTv, alt: 'Equipe assistindo apresentação na TV' },
  { src: IMAGE.allanConfraternizacao, alt: 'Allan durante a confraternização da equipe' },
  { src: IMAGE.equipeTodosVermelho, alt: 'Equipe toda vestida de vermelho para evento especial' },
  { src: IMAGE.confraternizacaoTrofeu, alt: 'Equipe celebrando com troféu em mãos' },
]

type PhotosProps = {
  src: StaticImageData
  alt: string
  width: number
  height: number
}

type TeamProps = {
  width: number
  height: number
}

const Photos = ({ src, alt, width, height }: PhotosProps) => (
  <div className={S['img-square']}>
    <Image width={width} height={height} src={src} alt={alt} className={S['img-cover']} />
  </div>
)

const Team = ({ width = 180, height = 180 }: TeamProps) => (
  <div className={S.container}>
    <div className={classNames(S.row, S['justify-content-center'])}>
      <div>
        <h3 className={S.subtitle}>Nossa equipe</h3>
        <h1 className={S.title}>Conectando histórias e transformando vidas</h1>
      </div>
    </div>
    <div className={classNames(S.row, S['align-items-center'])}>
      <div className={S['col-3']}>
        <Photos src={TEAMPHOTOS[0].src} alt={TEAMPHOTOS[0].alt} width={width} height={height} />
      </div>
      <div className={S['col-6']}>
        <div className={classNames(S.row, S.mb2)}>
          {TEAMPHOTOS.slice(1, 3).map((img, index) => (
            <div key={index} className={S[`col-${index === 0 ? 7 : 5}`]}>
              <Photos src={img.src} alt={img.alt} width={width} height={height} />
            </div>
          ))}
        </div>
        <div className={S.row}>
          {TEAMPHOTOS.slice(3, 5).map((img, index) => (
            <div key={index} className={S[`col-${index === 0 ? 5 : 7}`]}>
              <Photos src={img.src} alt={img.alt} width={width} height={height} />
            </div>
          ))}
        </div>
      </div>
      <div className={S['col-3']}>
        <Photos src={TEAMPHOTOS[5].src} alt={TEAMPHOTOS[5].alt} width={width} height={height} />
      </div>
    </div>
  </div>
)

export default Team

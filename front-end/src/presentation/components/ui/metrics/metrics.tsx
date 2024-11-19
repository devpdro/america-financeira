import { IconX } from '@tabler/icons-react'

import S from './metrics.module.scss'

const METRICS = [
  {
    Icon: IconX,
    title: 'R$70,7 milhões',
    description: 'Mês por Produção',
  },
  {
    Icon: IconX,
    title: 'R$4,2 bilhões',
    description: 'Volume Financeiro',
  },
  {
    Icon: IconX,
    title: '+18 Parceiros',
    description: 'Rede de Colaboração',
  },
  {
    Icon: IconX,
    title: '+12 Anos',
    description: 'História de Sucesso',
  },
]

const Metrics = () => (
  <div className={S.container}>
    <div className={S['info-section']}>
      {METRICS.map(({ Icon, title, description }, key) => (
        <div key={key} className={`${S['col-lg-3']} ${S['col-sm-6']} ${S['col-xs-12']} ${S['no-padding']}`}>
          <div className={S['numbers-section']}>
            <Icon className={S.icon} />
            <h2 className={S.title}>{title}</h2>
            <p className={S.description}>{description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={S['video-section']}>
      <div>
        <iframe
          className={S['video']}
          src="https://www.youtube.com/embed/mMnM4dBdH6s"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  </div>
)

export default Metrics

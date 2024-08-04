import styles from './partners-benefits.module.scss'
import { AiOutlineDollarCircle } from 'react-icons/ai' // Ícone de dólar em círculo
import { GiTakeMyMoney } from 'react-icons/gi' // Ícone de entregar dinheiro

const benefitsData = [
  {
    Icon: GiTakeMyMoney,
    title: 'R$4,8 milhões',
    subtitle: 'Líder de mercado na América Latina.',
  },
  {
    Icon: AiOutlineDollarCircle,
    title: 'R$6 bilhões',
    subtitle: 'Líder de mercado na América Latina.',
  },
  {
    Icon: GiTakeMyMoney,
    title: '35+ emissões',
    subtitle: 'Líder de mercado na América Latina.',
  },
  {
    Icon: GiTakeMyMoney,
    title: 'Mais de 10 de xp de atuação',
    subtitle: 'Líder de mercado.',
  },
]

const PartnersBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-section']}>
        <div className={styles['info-section']}>
          {benefitsData.map(({ Icon, title, subtitle }, index) => (
            <div
              key={index}
              className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']}`}
            >
              <div className={styles['numbers-section']}>
                <Icon className={styles.icon} />
                <h2 className={styles.title}>{title}</h2>
                <h4 className={styles.subtitle}>{subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles['video-section']}>
          <div>
            <iframe
              className={styles['video']}
              src="https://www.youtube.com/embed/mMnM4dBdH6s"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersBenefits

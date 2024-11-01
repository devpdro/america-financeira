import styles from './partners-benefits.module.scss'
import { FaMoneyBillWave, FaChartLine, FaRegCalendarAlt, FaUsers } from 'react-icons/fa' // Ícones de nota de dinheiro, gráfico de linha, calendário e grupo de pessoas

const benefitsData = [
  {
    Icon: FaMoneyBillWave,
    title: 'R$70,7 milhões',
    description: 'Mês por Produção',
  },
  {
    Icon: FaChartLine,
    title: 'R$4,2 bilhões',
    description: 'Volume Financeiro',
  },
  {
    Icon: FaUsers,
    title: '+18 Parceiros',
    description: 'Rede de Colaboração',
  },
  {
    Icon: FaRegCalendarAlt,
    title: '+12 Anos',
    description: 'História de Sucesso',
  },
]

const PartnersBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-section']}>
        <div className={styles['info-section']}>
          {benefitsData.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']}`}
            >
              <div className={styles['numbers-section']}>
                <Icon className={styles.icon} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
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

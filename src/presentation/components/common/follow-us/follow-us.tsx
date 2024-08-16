import Image from 'next/image'

import { Images } from '@/presentation/assets'
import { icons } from '@/data/ui'

import styles from './follow-us.module.scss'

export type FollowUsProps = {
  width?: number
  height?: number
}

const FollowUs: React.FC<FollowUsProps> = () => {
  return (
    <section className={styles.container} aria-labelledby="modal-titulo" aria-describedby="modal-descricao">
      <Image className={styles.img} src={Images.logoAmerica} alt="Logo América Financeira" />
      <h3 className={styles.subtitle}>Siga a gente</h3>
      <p className={styles.paragraph}>
        Conheça nossa cultura, explore nossos serviços e veja <br /> como transformamos finanças em oportunidades todos
        os dias.
      </p>
      <div className={styles['icons-section']}>
        {icons.map(({ icon: Icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link para ${link}`}>
            <Icon className={styles.icon} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default FollowUs

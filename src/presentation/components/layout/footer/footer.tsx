import Image from 'next/image'
import Link from 'next/link'

import { Images } from '@/presentation/assets'

import { list, icons } from '@/data/ui'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles['container-section']}>
        <div className={styles['info-section']}>
          <Image className={styles.img} src={Images.logoWhite} alt="Logo América Financeira" />
          <h6 className={styles.subtitle}>Nos siga nas redes sociais:</h6>
          <div className={styles['icons-section']}>
            {icons.map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link para ${link}`}>
                <Icon className={styles.icon} />
              </a>
            ))}
          </div>
            
        </div>
        <div className={styles['details-section']}>
          {list.map((section, index) => (
            <div className={styles['list-section']} key={index}>
              <h1 className={styles.title}>{section.title}</h1>
              <ul className={styles['list-box']}>
                {section.items.map((item, index) => (
                  <li key={index} className={styles.list}>
                    {item.link ? (
                      <Link legacyBehavior href={item.link}>
                        <span className={styles.link} aria-label={`Link para ${item.label}`}>
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <span className={styles.link} aria-label={item.label}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['container-info']}>
        <div className={styles['rights-reserved-section']}>
          <p>
            América Financeira - Todos os direitos reservados <br /> | CNPJ: 16.965.518/0001-08 | Av. Pres. Getulio{' '}
            <br /> Vargas, 832 - Santa Cruz, São Pedro - SP, 13520-000
          </p>
        </div>
        <div className={styles['terms-section']}>
          <p>
            <Link legacyBehavior href="/politica-de-privacidade">
              <span className={styles.link} aria-label="Política de Privacidade">
                Política de Privacidade
              </span>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/termos-de-uso">
              <span className={styles.link} aria-label="Termos de uso">
                Termos de uso
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

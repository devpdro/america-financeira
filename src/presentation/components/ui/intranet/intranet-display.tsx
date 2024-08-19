import { useState } from 'react'

import { intranet } from '@/data/ui'

import styles from './intranet-display.module.scss'

const IntranetDisplay: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    bancos: false,
    links: false,
    seguradoras: false,
  })

  const toggleVisibility = (section: string) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <section className={styles.container}>
      {intranet.map((section) => (
        <div key={section.id} className={styles['box-section']} onClick={() => toggleVisibility(section.id)}>
          <div className={styles['title-section']}>
            <h6 className={styles.title}>{section.title}</h6>
            <span className={styles.icon}>{visibleSections[section.id] ? '-' : '+'}</span>
          </div>
          {visibleSections[section.id] && (
            <ul className={styles['list-section']}>
              {section.items.map((item, index) => (
                <li className={styles.list} key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Adicionando stopPropagation aqui
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}

export default IntranetDisplay

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
          <div className={styles.header}>
            {section.title}
            <span className={styles.icon}>{visibleSections[section.id] ? '-' : '+'}</span>
          </div>
          {visibleSections[section.id] && (
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
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

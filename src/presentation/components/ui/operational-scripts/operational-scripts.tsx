import React from 'react'
import { Button } from '../../form'
import styles from './operational-scripts.module.scss'

const operationalScripts = [
  { name: 'Amigoz', link: 'https://drive.google.com/drive/folders/1yFLRbgQ_ksdHU8OQxUXzgoECEuxsUmiY' },
  { name: 'Banrisul', link: 'https://drive.google.com/drive/folders/1kyTxkvolbIVKxL4RdriWm-rsDcnLYioy' },
  { name: 'Bmg', link: 'https://drive.google.com/drive/folders/1ETUO0LoC29lsOTxKvnST3yTBxd6KsLIY' },
  { name: 'Brb', link: 'https://drive.google.com/drive/folders/1M7cmOAYgmvUkd-scPd7cbb_c0GNElmmZ' },
  { name: 'C6', link: 'https://drive.google.com/drive/folders/1_BwMZFPUkbBFd2tBm9SejtaEkkPjgE4Z' },
  { name: 'Crefisa', link: 'https://drive.google.com/drive/folders/11SoZqfeQB6slo-clhyp1ZRp0uEH5eN5B' },
  { name: 'Daycoval', link: 'https://drive.google.com/drive/folders/1LCHk6BV-e-OPTaA39zBtyMKBRa8Q_D8O' },
  { name: 'Facta', link: 'https://drive.google.com/drive/folders/1atTP7RXlR3rteILKUViuZUhUwFxQOGtr' },
  { name: 'Happy', link: 'https://drive.google.com/drive/folders/1Mz4Gbh4h8a1hGncYuvC_X2qFZdeTrvb5' },
  { name: 'Icred', link: 'https://drive.google.com/drive/folders/1Yoy0arkR1GreWpthEWrFgbIZxV1sfP1C' },
  { name: 'Inbursa', link: 'https://drive.google.com/drive/folders/1es4ugmJf5sJZdaxA8gAbPwaD85KT6p6F' },
  { name: 'Itau', link: 'https://drive.google.com/drive/folders/17VL5cQW5HnnkeJOAiCqGz9ddyHkkQGVr' },
  { name: 'Master', link: 'https://drive.google.com/drive/folders/1f5llhbJH-gXGtCp_EJR6gTrD7DDgUA6' },
  { name: 'Mercantil', link: 'https://drive.google.com/drive/folders/1UqwMpCWOgGl0w71HK3sgmjPU7Ce7QAMd' },
  { name: 'Olé', link: 'https://drive.google.com/drive/folders/13RC6r-eh_M6-BXjgmotTUryUUbhWuYPS' },
  { name: 'Pan', link: 'https://drive.google.com/drive/folders/1EP2tELTg_qi5YG4JJztArxV-mXgua6Ks' },
  { name: 'Presenca Bank', link: 'https://drive.google.com/drive/folders/1LUbGnvMZu7S32M4IXvwjlpwjPhaJwm56' },
  { name: 'Quero+', link: 'https://drive.google.com/drive/folders/1XVet7NX4KRqWOCZmA4yKHwmxFroSnY' },
  { name: 'Safra', link: 'https://drive.google.com/drive/folders/1WblTTy6Zmyrl1j0Fa5qmjxpwYtPwgtbK' },
]

const OperationalScriptsDisplay = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Roteiros Operacionais</h1>
      <div className={styles['btn-section']}>
        {operationalScripts.map((script, index) => (
          <Button
            key={index}
            typeStyle="btn5"
            width="190px"
            text={script.name}
            onClick={() => window.open(script.link, '_blank')}
          />
        ))}
      </div>
    </section>
  )
}

export default OperationalScriptsDisplay

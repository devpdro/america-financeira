import React from 'react'
import styles from './intranet-display.module.scss'

const IntranetDisplay: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.boxSection}>
        <h1 className={styles.title}>Bem-vindo à Intranet</h1>
      </div>
    </section>
  )
}

export default IntranetDisplay

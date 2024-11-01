import { FaTools } from 'react-icons/fa'

import styles from './hot-academy-display.module.scss'

const HotAcademyDisplay = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Tutoriais do Sistema</h1>
      <div className={styles['subtitle-section']}>
        <FaTools className={styles.icon} />
        <h3 className={styles.subtitle}>Chathot</h3>
      </div>
    </section>
  )
}

export default HotAcademyDisplay

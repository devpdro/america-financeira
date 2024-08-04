'use client'

import { useState } from 'react'

import { IoClose } from 'react-icons/io5'

import styles from './loan-warning.module.scss'

const LoanWarning = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside className={styles.container}>
      <div className={styles['box-section']}>
        <h1 className={styles.title}>Atenção: Não pedimos pagamento antecipado para aprovação do empréstimo</h1>
        <IoClose className={styles.icon} onClick={handleClose} />
      </div>
    </aside>
  )
}

export default LoanWarning

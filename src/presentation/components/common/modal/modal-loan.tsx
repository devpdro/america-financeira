import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import styles from './modal-loan.module.scss'
import { Button } from '@/presentation/components/form'

import { IconsItems } from '@/data/ui'

interface ModalLoanProps {
  isOpen: boolean
  onClose: () => void
  message?: string
}

const ModalLoan: React.FC<ModalLoanProps> = ({ isOpen, onClose, message }) => {
  return (
    <section className={styles.container} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Modal
        classNames={{
          modal: styles.modal,
        }}
        open={isOpen}
        onClose={onClose}
        center
        showCloseIcon={false}
        blockScroll={true}
        animationDuration={300}
        focusTrapped={true}
        closeOnEsc={true}
        aria-modal="true"
        role="dialog"
      >
        <div className={styles['modal-content']}>
          <h1 id="modal-title" className={styles.title}>
            {message}
          </h1>
          <h3 className={styles.subtitle}>Siga a gente</h3>
          <p id="modal-description" className={styles.paragraph}>
            Aprenda a economizar, organizar as suas finanças e fazer <br /> o seu dinheiro render mais.
          </p>
          <div className={styles['icons-section']}>
            {IconsItems.map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link para ${link}`}>
                <Icon className={styles.icon} />
              </a>
            ))}
          </div>
          <Button typeStyle="btn1" text="Fechar" width="100%" onClick={onClose} aria-label="Fechar o modal" />
        </div>
      </Modal>
    </section>
  )
}

export default ModalLoan

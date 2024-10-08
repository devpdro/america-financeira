import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { Button } from '@/presentation/components/form'
import { icons } from '@/data/ui'

import styles from './status.module.scss'

interface StatusModalProps {
  isOpen: boolean
  message?: string
  onClose: () => void
}

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose, message }) => {
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
            Conheça nosso cultura, explore nossos serviços e veja como <br />
            transformamos finanças em oportunidades todos os dias.
          </p>
          <div className={styles['icons-section']}>
            {icons.map(({ icon: Icon, link }, index) => (
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

export default StatusModal

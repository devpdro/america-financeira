import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { Button } from '@/presentation/components/form'
import styles from './status.module.scss'

interface InfoItem {
  text: string
  link: string
}

interface StatusModalProps {
  isOpen: boolean
  message?: string
  info?: InfoItem[]
  onClose: () => void
}

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose, message, info }) => {
  return (
    <section className={styles.container} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Modal
        classNames={{ modal: styles.modal }}
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
          {info &&
            info.map((item, index) => (
              <p key={index} className={styles.paragraph}>
                <a href={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </p>
            ))}
          <Button typeStyle="btn1" text="Fechar" width="100%" onClick={onClose} aria-label="Fechar o modal" />
        </div>
      </Modal>
    </section>
  )
}

export default StatusModal

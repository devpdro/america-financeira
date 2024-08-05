import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { Button } from '@/presentation/components/form'
import { IoClose } from 'react-icons/io5'

import styles from './error-modal.module.scss'

interface ErrorModalProps {
  isOpen: boolean
  message?: string
  onClose: () => void
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, message }) => {
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
          <Button typeStyle="btn1" text="Fechar" width="100%" onClick={onClose} aria-label="Fechar o modal" />
        </div>
      </Modal>
    </section>
  )
}

export default ErrorModal

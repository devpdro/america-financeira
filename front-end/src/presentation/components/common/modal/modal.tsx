import { Modal as ResponsiveModal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { Button } from 'src/presentation/components'

import S from './status.module.scss'

type ItemProps = {
  paragraph: string
  link: string
}

type ModalProps = {
  open: boolean
  message: string
  description: ItemProps[]
  close: () => void
}

const Modal = ({ open, description, message }: ModalProps) => (
  <div className={S.container}>
    <ResponsiveModal
      classNames={{ modal: S.modal }}
      open={open}
      onClose={close}
      center
      showCloseIcon={false}
      blockScroll={true}
      animationDuration={300}
      focusTrapped={true}
      closeOnEsc={true}
      role="dialog"
    >
      <div className={S['modal-content']}>
        <h1 className={S.title}>{message}</h1>
        {description &&
          description.map(({ paragraph, link }, key) => (
            <p key={key} className={S.paragraph}>
              <a href={link} className={S.link} target="_blank" rel="noopener noreferrer">
                {paragraph}
              </a>
            </p>
          ))}
        <Button typeStyle="btn1" label="Fechar" width="100%" onClick={close} />
      </div>
    </ResponsiveModal>
  </div>
)

export default Modal

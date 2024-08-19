import { FaWhatsapp } from 'react-icons/fa'

import styles from './whatsapp-button.module.scss'

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles['whatsapp-button']}
      aria-label="Contato para o WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  )
}

export default WhatsappButton

import { Button, LoanRequest } from '@/presentation/components/form'

import styles from './header.module.scss'

export type HeaderProps = {
  title: string
  subtitle: React.ReactNode
  backgroundImage: string
  showLoanRequest?: boolean
  showDetails?: React.ReactNode
  showParagraph?: string
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  showLoanRequest = true,
  showParagraph = false,
  showDetails = false,
}) => {
  return (
    <header
      id="header"
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
      }}
      aria-label="Cabeçalho"
    >
      <div className={styles['box-section']} aria-label="Seção de Conteúdo">
        <div className={styles['text-section']} aria-label="Seção de Texto">
          <h6 className={styles.subtitle} aria-label="Subtítulo">
            {title}
          </h6>
          <h1 className={styles.title} aria-label="Título">
            {subtitle}
          </h1>
          {showDetails && (
            <>
              <p className={styles['paragraph-details']} aria-label="Detalhes">
                {showDetails}
              </p>
              <Button typeStyle="btn3" text="Conheça mais" aria-label="Conheça mais sobre os detalhes" />
            </>
          )}
          {showParagraph && (
            <p className={styles.paragraph} aria-label="Parágrafo">
              {showParagraph}
            </p>
          )}
        </div>
        {showLoanRequest && (
          <div className={styles['form-section']} aria-label="Seção de Formulário de Empréstimo">
            <LoanRequest />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

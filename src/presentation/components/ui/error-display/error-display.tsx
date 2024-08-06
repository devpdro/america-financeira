import Link from 'next/link'

import { Button } from '@/presentation/components/form'

import styles from './error-display.module.scss'

type ErrorDisplayProps = {
  title: string
  subtitle: React.ReactNode
  message: React.ReactNode
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ title, subtitle, message }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles['subtitle-message']}>{message}</p>
      <Link href="/">
        <Button width="300px" typeStyle="btn2" text="Voltar para a página principal" />
      </Link>
    </section>
  )
}

export default ErrorDisplay

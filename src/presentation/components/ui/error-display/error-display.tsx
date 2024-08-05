import Link from 'next/link'

import { Button } from '@/presentation/components/form'

import styles from './error-display.module.scss'

const ErrorDisplay = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Ops!</h1>
      <p className={styles.subtitle}>
        Não conseguimos encontrar a página que você <br />  está procurando.
      </p>
      <p className={styles.subtitle}>
        Se não sabe para onde ir, qualquer caminho serve! <br /> - Gato Cheshire, Alice no País das Maravilhas.
      </p>
      <Link
        href="/"
      >
        <Button width="300px" typeStyle="btn2" text="Voltar para a página principal" />
      </Link>
    </section>
  )
}

export default ErrorDisplay

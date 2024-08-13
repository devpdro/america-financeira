import Image from 'next/image'

import { Images } from '@/presentation/assets'

import styles from './latest-posts.module.scss'
import Link from 'next/link'

const LatestPosts = () => {
  return (
    <section className={styles.container}>
      <p className={styles['subtitle-section']}>Nossas últimas postagens</p>
      <h1 className={styles['title-section']}>
        Acompanhe nossas novidades <br /> e dicas!
      </h1>
      <div className={styles.news}>
        <Link
          className={styles.link}
          href="/pagar-boleto-com-cartao-de-credito-e-possivel"
          aria-label="Leia mais sobre Empréstimos"
        >
          <div className={styles.article}>
            <Image className={styles.img} src={Images.simulacaoFgts} alt="Empréstimos" />
            <p className={styles.subtitle}>Empréstimos</p>
            <h1 className={styles.title}>Como fazer uma simulação para empréstimo FGTS</h1>
            <p className={styles.data}>11 de março de 2024</p>
          </div>
        </Link>
        <Link
          className={styles.link}
          href="/como-economizar-no-dia-a-dia-dicas-praticas"
          aria-label="Leia mais sobre Investimentos"
        >
          <div className={styles.article}>
            <Image className={styles.img} loading="lazy" src={Images.pessoaSozinha} alt="Investimentos" />
            <p className={styles.subtitle}>Investimentos</p>
            <h1 className={styles.title}>CDB: Tudo o que você precisa saber sobre e como investir!</h1>
            <p className={styles.data}>21 de julho de 2024</p>
          </div>
        </Link>
        <Link
          className={styles.link}
          href="/como-fazer-uma-simulacao-para-emprestimo-fgts"
          aria-label="Leia mais sobre Cartão de Crédito"
        >
          <div className={styles.article}>
            <Image className={styles.img} loading="lazy" src={Images.cartaoDebito} alt="Cartão de Crédito" />
            <p className={styles.subtitle}>Cartão de Crédito</p>
            <h1 className={styles.title}>Pagar boleto no cartão de crédito é possível?</h1>
            <p className={styles.data}>21 de janeiro de 2024</p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default LatestPosts

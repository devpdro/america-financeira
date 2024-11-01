import Image from 'next/image'
import styles from './ceo-about.module.scss'
import { Images } from '@/presentation/assets'

const CeoAbout: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-section']}>
        <header className={styles['title-section']}>
          <h6 className={styles.subtitle}>Vem com a América Financeira</h6>
          <h1 className={styles.title}>
            Conheça nossa <br /> liderança
          </h1>
        </header>
        <article className={styles['about-section']}>
          <div className={styles['image-section']}>
            <Image src={Images.allan} alt="Allan Bertho, CEO da América Financeira" className={styles.img} />
          </div>
          <div className={styles['text-section']}>
            <h1 className={styles.title}>Allan Diego Bertho</h1>
            <h6 className={styles.subtitle}>CEO e Fundador</h6>
            <p className={styles.paragraph}>
              Allan Bertho é um empresário de São Pedro, SP, com uma trajetória marcada por resiliência e inovação.
              Nascido em uma família humilde, Allan iniciou sua carreira profissional aos 14 anos, passando por diversas
              áreas até se encontrar no mundo dos negócios e das vendas.
            </p>
            <p className={styles.paragraph}>
              Com experiência em empresas como Senac e Porto Seguro, Allan fundou a América Financeira e Seguros em
              2012. Superando inúmeros desafios, ele desenvolveu o Método HOT, um sistema revolucionário de vendas
              validado e testado por sua empresa. Hoje, com 12 anos de mercado, a América Financeira é um nome
              consolidado, e Allan está pronto para compartilhar seu método de sucesso com parceiros e empreendedores.
            </p>
            <p className={styles.paragraph}>
              O Método HOT oferece uma solução completa e integrada para otimizar vendas ativas e receptivas, garantindo
              alta performance e crescimento sustentável. Allan Bertho é um exemplo de perseverança e visão estratégica,
              dedicado a transformar desafios em oportunidades e a elevar o padrão de vendas no mercado financeiro.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CeoAbout

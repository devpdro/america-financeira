import styles from './introduction-about.module.scss'

const IntroductionAbout = () => {
  return (
    <section className={styles.container}>
      <header className={styles['title-section']}>
        <h3 className={styles.subtitle}>Quem Somos?</h3>
        <h1 className={styles.title}>
          Somos a América Financeira, dedicada a oferecer soluções financeiras inovadoras para transformar vidas e
          realizar sonhos. Nossa missão é proporcionar produtos financeiros que atendam às necessidades individuais de
          nossos clientes;
        </h1>
      </header>
      <article className={styles['explication-section']}>
        <p className={styles.paragraph}>
          A América Financeira se destaca por fornecer serviços financeiros que são seguros, acessíveis e adaptados às
          necessidades de nossos clientes. Nosso compromisso é criar um impacto positivo na vida das pessoas através de
          produtos financeiros que facilitam a conquista de objetivos.
        </p>
        <p className={styles.paragraph}>
          Com mais de 10 anos de experiência, temos uma trajetória de sucesso ajudando milhares de pessoas a alcançarem
          suas metas financeiras. Nossa equipe é composta por especialistas dedicados a oferecer atendimento
          personalizado e soluções eficazes, sempre focados em inovação e excelência.
        </p>
      </article>
    </section>
  )
}

export default IntroductionAbout

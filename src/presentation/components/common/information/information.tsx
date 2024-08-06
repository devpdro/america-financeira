import styles from './information.module.scss'

const Information = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>América Partners</h1>
      <p className={styles.paragraph}>
        Seja bem-vindo ao America Partners! Aqui você encontrará informações sobre nossas parcerias estratégicas e como
        elas podem ajudar a impulsionar o seu negócio. Na America Financeira, valorizamos a colaboração e estamos
        comprometidos em oferecer suporte e soluções financeiras inovadoras aos nossos parceiros.
      </p>
      <p className={styles.paragraph}>
        Junte-se a nós e descubra os benefícios exclusivos de ser um parceiro da America Financeira. Tenha acesso a
        recursos dedicados e suporte contínuo para crescer com segurança.
      </p>
      <p className={styles.paragraph}>
        Nossos parceiros têm acesso a uma ampla rede de clientes, suporte especializado e inúmeras oportunidades de
        crescimento. Com mais de 12 anos de experiência, estamos aqui para ajudar você a alcançar novos patamares de
        sucesso. Explore nossas soluções e veja como podemos crescer juntos.
      </p>
    </section>
  )
}

export default Information

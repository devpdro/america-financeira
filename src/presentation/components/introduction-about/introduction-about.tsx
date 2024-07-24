import styles from "./introduction-about.module.scss";

const IntroductionAbout = () => {
  return (
    <section className={styles.container}>
      <header className={styles["title-section"]}>
        <h2 className={styles.subtitle}>Quem Somos</h2>
        <h1 className={styles.title}>
          Somos especialistas em resolver problemas. Integrantes de equipe com
          um único objetivo: entregar seu projeto dentro do prazo, do orçamento
          e conforme sua visão.
        </h1>
      </header>
      <article className={styles["explication-section"]}>
        <p className={styles.paragraph}>
          Uma empresa de desenvolvimento web é especializada em projetar,
          planejar e implementar soluções digitais para empresas de diversos
          setores. Nosso objetivo é fornecer sites de alta qualidade que sejam
          visualmente atraentes e funcionais.
        </p>
        <p className={styles.paragraph}>
          Com mais de 2 anos de experiência na área, nossa empresa tem se
          destacado pela excelência na entrega de projetos e pela habilidade de
          compreender as necessidades específicas de cada cliente. Durante esse
          tempo, desenvolvemos um profundo conhecimento em diversas tecnologias
          e metodologias de desenvolvimento web, permitindo-nos oferecer
          soluções personalizadas e eficazes para nossos clientes.
        </p>
      </article>
    </section>
  );
};

export default IntroductionAbout;

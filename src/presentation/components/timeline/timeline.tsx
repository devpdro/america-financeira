import React from "react";
import styles from "./timeline.module.scss";

const timelineData = [
  {
    duration: "1 Ano",
    year: "2012",
    title: "América Financeira: Início das Operações",
    description:
      "A América Financeira iniciou suas operações em 2012, oferecendo uma ampla gama de serviços financeiros para atender às necessidades de seus clientes.",
  },
  {
    duration: "2 Ano",
    year: "2014",
    title: "Expansão de Produtos",
    description:
      "Em 2014, a América Financeira expandiu seu portfólio de produtos, introduzindo novas soluções financeiras e serviços personalizados para um público maior.",
  },
  {
    duration: "1 Ano",
    year: "2015",
    title: "Parcerias Estratégicas",
    description:
      "No ano de 2015, a América Financeira estabeleceu parcerias estratégicas com várias instituições financeiras, fortalecendo sua posição no mercado.",
  },
  {
    duration: "2 Ano",
    year: "2017",
    title: "Lançamento de Plataforma Online",
    description:
      "A América Financeira lançou sua plataforma online em 2017, permitindo que os clientes gerenciem suas finanças de forma mais conveniente e acessível.",
  },
  {
    duration: "2 Ano",
    year: "2019",
    title: "Rebranding e Novo Foco",
    description:
      "Em 2019, a empresa passou por um rebranding significativo e redefiniu seu foco para atender melhor às necessidades dos clientes e melhorar a experiência do usuário.",
  },
  {
    duration: "2 Ano",
    year: "2021",
    title: "Inovação em Produtos Financeiros",
    description:
      "A América Financeira introduziu inovações em seus produtos financeiros em 2021, com novas funcionalidades e melhorias para oferecer uma experiência de cliente excepcional.",
  },
  {
    duration: "1 Ano",
    year: "2022",
    title: "Expansão Internacional",
    description:
      "No ano de 2022, a América Financeira expandiu suas operações para mercados internacionais, ampliando seu alcance e oferecendo seus serviços a um público global.",
  },
  {
    duration: "2 Ano",
    year: "2024",
    title: "Lançamento de Nova Plataforma de Serviços",
    description:
      "Em 2024, a América Financeira lançou uma nova plataforma de serviços, incorporando tecnologias avançadas e oferecendo soluções financeiras mais integradas e eficientes.",
  },
];

const Timeline = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        {timelineData.map((item, index) => (
          <article key={index} className={styles.timeline}>
            <div className={styles.icon}></div>
            <div className={styles["date-content"]}>
              <div className={styles["date-outer"]}>
                <span className={styles.date}>
                  <span className={styles.month}>{item.duration}</span>
                  <span className={styles.year}>{item.year}</span>
                </span>
              </div>
            </div>
            <div className={styles["timeline-content"]}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.description}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

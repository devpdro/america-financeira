"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import styles from "./carousel.module.scss";

const items = [
  <div className={styles.item} role="presentation" key="1">
    <h1>Empréstimo Consignado</h1>
    <p>
      Para aposentados e pensionistas do INSS, com desconto em folha, taxas
      reduzidas e até 84 vezes pra pagar. Contrate em poucos cliques, sem sair
      de casa!
    </p>
  </div>,
  <div className={styles.item} role="presentation" key="2">
    <h1>Texto 2</h1>
  </div>,
  <div className={styles.item} role="presentation" key="3">
    <h1>Texto 3</h1>
  </div>,
  <div className={styles.item} role="presentation" key="3">
    <h1>Texto 3</h1>
  </div>,
];

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 }, // A partir de 1024px de largura, 3 itens serão exibidos
};

const Carousel = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Encontre o empréstimo que mais combina com você aqui na América
        Financeira
      </h1>
      <AliceCarousel
        paddingLeft={10}
        paddingRight={10}
        mouseTracking
        items={items}
        autoPlay
        responsive={responsive}
        autoPlayInterval={3000}
      />
    </section>
  );
};

export default Carousel;

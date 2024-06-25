import { Images } from "@/presentation/assets";

import styles from "./credit-details.module.scss";

const creditDetailsData = [
  {
    title: "Quitar as dívidas",
    subtitle:
      "Troque as dívidas caras por uma única, mais saudável e com parcelas mais acessíveis.",
      image: Images.Money,
  },
  {
    title: "Impulsionar seu negócio",
    subtitle:
      "Invista no seu capital com um crédito que te dá mais prazo e com juros mais baixos.",
      image: Images.Business ,
  },
  {
    title: "Realizar sonhos",
    subtitle:
      "Tire do papel o plano de reformar a casa ou adquirir novos bens com um crédito saudável.",
      image: Images.DreamerBackground ,
  },
];

const CreditDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles["text-section"]}>
        <h1 className={styles.title}>
          O crédito de qualidade <br /> que você merece
        </h1>
        <p className={styles.subtitle}>
          Com o empréstimo com garantia de imóvel é dinheiro <br /> no bolso
          para resolver a sua vida
        </p>
      </div>
      <div className={styles["details-section"]}>
        {creditDetailsData.map((item, index) => (
          <div className={styles.box} key={index}>
            <img src={item.image.src} className={styles["image-section"]}></img>
            <div className={styles["info-section"]}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreditDetails;

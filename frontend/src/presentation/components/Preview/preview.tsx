import { Button } from "../Form";

import image from '@/presentation/assets/image/img/emprestimo-consignado.jpg'

import styles from './preview.module.scss'

const Preview = () => {
  return (
    <section className={styles.container}>
      <div className={styles["image-section"]}>
        <img src={image.src} alt="teste" />
      </div>
      <div className={styles["text-section"]}>
        <h1 className={styles.title}>Emprestimo Consginado</h1>
        <p className={styles.subtitle}>
          Para aposentados e pensionistas do INSS, com desconto em folha, taxas
          reduzidas e até 84 vezes pra pagar. Contrate em poucos cliques, sem
          sair de casa!
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Preview;

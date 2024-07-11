import { CreditBenefits } from "@/presentation/components";

import styles from "./credit-acess.module.scss";
import { Button } from "../Form";

const CreditAcess = () => {
  return (
    <section className={styles.container}>
      <div className={styles["box-section"]}>
        <div className={styles["text-section"]}>
          <p className={styles.subtitle}>Construímos juntos</p>
          <h1 className={styles.title}>Como ter acesso ao seu crédito?</h1>
          <p>*Sujeito a analise de proudot</p>
          <a
            href="https://api.whatsapp.com/send?phone=5519971636739&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20o%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              typeStyle="btn3"
              text="Simular crédito"
              width="450px"
            ></Button>
          </a>
        </div>
        <div className={styles.contents}>
          <CreditBenefits numbering={1} title="Representação Visual" />
          <CreditBenefits numbering={2} title="Segurança" />
          <CreditBenefits numbering={3} title="Tecnlogia de Ponta" />
          <CreditBenefits numbering={4} title="Custo x Benefício" />
        </div>
      </div>
    </section>
  );
};

export default CreditAcess;

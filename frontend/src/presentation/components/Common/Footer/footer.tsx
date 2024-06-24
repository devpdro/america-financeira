import { Button } from "@/presentation/components/Form";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["container-section"]}>
        <div className={styles["info-section"]}>
          <p className={styles.paragraph}>América Financeira @ 2024</p>
          <h6 className={styles.subtitle}>Nos siga nas redes sociais:</h6>
        </div>
        <div className={styles["details-section"]}>
          <div className={styles["list-section"]}>
            <h1 className={styles.title}>Produtos</h1>
            <ul>
              <li>Empréstimo FGTS</li>
              <li>Empréstimo Consignado</li>
              <li>Cartão de Crédito</li>
              <li>Cartão Consignado</li>
              <li>Empréstimo Pessoal Consignado</li>
            </ul>
          </div>
          <div className={styles["list-section"]}>
            <h1 className={styles.title}>Atendimento</h1>
            <ul>
              <li>Segunda à Sexta das 9h às 21h</li>
              <li>Sábado das 9h às 15h</li>
            </ul>
          </div>
          <div className={styles["list-section"]}>
            <h1 className={styles.title}>Outras informações</h1>
            <ul>
              <li>Blog</li>
              <li>Sobre a América Financeira</li>
              <li>Trabalhe conosco</li>
              <li>Intranet</li>
              <li>Seja parceiro</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["container-info"]}>
        <div className={styles["rights-reserved-section"]}>
          <p className={styles.paragraph}>
            América Financeira - Todos os direitos reservados | CNPJ: CNPJ: 16.965.518/0001-08 |
            Instituição América Financeira 
          </p>
          <p className={styles.paragraph}>
            Rua | Prédio E1 - 
            , São Pedro - SP, 13520-000
          </p>
        </div>
        <div className={styles["terms-section"]}>
          <ul>
            <li>Política de Privacidade</li>
            <li>Termos de uso</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

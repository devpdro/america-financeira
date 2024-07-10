import { FooterItems } from "@/data";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["container-section"]}>
        <div className={styles["info-section"]}>
          <p className={styles.paragraph}>América Financeira@2024</p>
          <h6 className={styles.subtitle}>Nos siga nas redes sociais:</h6>
        </div>
        <div className={styles["details-section"]}>
          {FooterItems.map((section, index) => (
            <div className={styles["list-section"]} key={index}>
              <h1 className={styles.title}>{section.title}</h1>
              <ul className={styles["list-box"]}>
                {section.items.map((item, index) => (
                  <li key={index} className={styles.list}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["container-info"]}>
        <div className={styles["rights-reserved-section"]}>
          <p>
            América Financeira - Todos os direitos reservados | CNPJ: CNPJ:
            16.965.518/0001-08 | Instituição América Financeira
          </p>
          <p>Rua | Prédio E1 - , São Pedro - SP, 13520-000</p>
        </div>
        <div className={styles["terms-section"]}>
          <p>Política de Privacidade</p>
          <p>Termos de uso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

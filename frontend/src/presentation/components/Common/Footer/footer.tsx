import { FooterItems } from "@/data";
import Image from "next/image";

import { Icons } from "@/presentation/assets";
import { Images } from "@/presentation/assets";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["container-section"]}>
        <div className={styles["info-section"]}>
          <Image
            className={styles.img}
            src={Images.LogoAmericaWhite}
            alt="Logo América Financeira"
          />
          <p className={styles.paragraph}>América Financeira@2024</p>
          <h6 className={styles.subtitle}>Nos siga nas redes sociais</h6>
          <div className={styles["icons-section"]}>
            <Icons.FaLinkedin className={styles.icon} />
            <Icons.FaFacebook className={styles.icon} />
            <Icons.FaInstagram className={styles.icon} />
            <Icons.FaYoutube className={styles.icon} />
          </div>
          <div className={styles["whatsapp-section"]}>
            <h6 className={styles.title}>
              Fale com a gente por <br /> WhatsApp.
            </h6>
            <Image src={Images.QrCode} alt="QR Code para o WhatsApp" />
          </div>
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

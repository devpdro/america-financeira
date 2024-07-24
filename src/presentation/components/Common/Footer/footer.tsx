import Image from "next/image";
import Link from "next/link";

import { Images } from "@/presentation/assets";

import { FooterItems, IconsItems } from "@/data";

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
          <h6 className={styles.subtitle}>Nos siga nas redes sociais:</h6>
          <div className={styles["icons-section"]}>
            {IconsItems.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.icon} />
              </a>
            ))}
          </div>
          <h6 className={styles.subtitle}>Precisando de ajuda?</h6>
          <div className={styles["whatsapp-section"]}>
            <h6 className={styles.title}>
              Fale com a gente pelo <br /> Telefone.
            </h6>
            <Image src={Images.QrCode} alt="QR Code para o Telefone" />
          </div>
          <div className={styles["whatsapp-section"]}>
            <h6 className={styles.title}>
              Fale com a gente por <br /> WhatsApp.
            </h6>
            <Image src={Images.QrCodeWhats} alt="QR Code para o WhatsApp" />
          </div>
        </div>
        <div className={styles["details-section"]}>
          {FooterItems.map((section, index) => (
            <div className={styles["list-section"]} key={index}>
              <h1 className={styles.title}>{section.title}</h1>
              <ul className={styles["list-box"]}>
                {section.items.map((item, index) => (
                  <li key={index} className={styles.list}>
                    {item.link ? (
                      <Link legacyBehavior href={item.link}>
                        <span className={styles.link}>{item.label}</span>
                      </Link>
                    ) : (
                      <span className={styles.link}>{item.label}</span>
                    )}
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
            América Financeira - Todos os direitos reservados <br /> | CNPJ:
            16.965.518/0001-08 | Instituição América Financeira
          </p>
          <p>
            Av. Pres. Getulio Vargas, 832 - Santa Cruz, São Pedro - SP,
            13520-000
          </p>
        </div>
        <div className={styles["terms-section"]}>
          <p>
            <Link legacyBehavior href="/politica-de-privacidade">
              <span className={styles.link}>Política de Privacidade</span>
            </Link>
          </p>
          <p>
            <Link legacyBehavior href="/termos-de-uso">
              <span className={styles.link}>Termos de uso</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

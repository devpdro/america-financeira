import { NavItem } from "@/presentation/components/common";
import { NavMobileTypes } from "@/presentation/@types";
import { IconWithProps } from "@/presentation/utils";
import { Icons } from "@/presentation/assets";
import { NavItems } from "@/data";

import styles from "./nav-mobile.module.scss";

const NavMobile = ({ closeSideMenu }: NavMobileTypes) => {
  return (
    <div
      className={styles["mobile-nav-container"]}
      aria-label="Navegação Móvel"
    >
      <nav
        className={styles["mobile-nav"]}
        aria-label="Menu de Navegação Móvel"
      >
        <section className={styles["close-section"]}>
          <IconWithProps
            onClick={closeSideMenu}
            className={styles["close-icon"]}
            aria-label="Fechar Menu"
          >
            <Icons.AiOutlineClose aria-hidden="true" />
          </IconWithProps>
        </section>
        <div className={styles["nav-items"]} aria-label="Itens de Navegação">
          {NavItems.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              aria-label={item.label}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <section
          className={styles["auth-buttons"]}
          aria-label="Botões de Autenticação"
        >
          <Icons.IoPersonOutline className={styles.icon} aria-hidden="true" />
          <h1 aria-label="Entrar">Entrar</h1>
        </section>
      </nav>
    </div>
  );
};

export default NavMobile;

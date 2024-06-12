import { NavItems } from "@/data";
import { NavItem } from "..";

import { IconWithProps } from '@/presentation/utils'

import { AiOutlineClose } from "react-icons/ai";

import styles from "./nav-mobile.module.scss";

type NavMobileProps = {
  closeSideMenu: () => void;
};

const NavMobile = ({ closeSideMenu }: NavMobileProps) => {
  return (
    <div className={styles["mobile-nav-container"]}>
      <div className={styles["mobile-nav"]}>
        <section className={styles["close-section"]}>
          <IconWithProps
            onClick={closeSideMenu}
            className={styles["close-icon"]}
          >
            <AiOutlineClose />
          </IconWithProps>
        </section>
        <div className={styles["nav-items"]}>
          {NavItems.map((d, i) => (
            <NavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </NavItem>
          ))}
        </div>
        <section className={styles["auth-buttons"]}>
          <button className={styles["login-button"]}>Login</button>
          <button className={styles["register-button"]}>Registrar</button>
        </section>
      </div>
    </div>
  );
};

export default NavMobile;

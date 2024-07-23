import { NavItem } from "@/presentation/components/common";
import { NavMobileTypes } from "@/presentation/@types";
import { IconWithProps } from "@/presentation/utils";
import { Icons } from "@/presentation/assets";
import { NavItems } from "@/data";

import styles from "./nav-mobile.module.scss";

const NavMobile = ({ closeSideMenu }: NavMobileTypes) => {
  return (
    <div className={styles["mobile-nav-container"]}>
      <nav className={styles["mobile-nav"]}>
        <section className={styles["close-section"]}>
          <IconWithProps
            onClick={closeSideMenu}
            className={styles["close-icon"]}
          >
            <Icons.AiOutlineClose />
          </IconWithProps>
        </section>
        <div className={styles["nav-items"]}>
          {NavItems.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <section className={styles["auth-buttons"]}>
          <Icons.IoPersonOutline className={styles.icon} />
          <h1>Entrar</h1>
        </section>
      </nav>
    </div>
  );
};

export default NavMobile;

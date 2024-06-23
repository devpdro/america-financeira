import { NavMobileProps } from "@/presentation/@types";
import { IconWithProps } from "@/presentation/utils";
import { Icons } from '@/presentation/assets'
import { NavItems } from "@/data";
import { NavItem } from "..";

import styles from "./nav-mobile.module.scss";

const NavMobile = ({ closeSideMenu }: NavMobileProps) => {
  return (
    <div className={styles["mobile-nav-container"]}>
      <div className={styles["mobile-nav"]}>
        <section className={styles["close-section"]}>
          <IconWithProps
            onClick={closeSideMenu}
            className={styles["close-icon"]}
          >
            <Icons.AiOutlineClose />
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
          <Icons.IoPersonOutline className={styles.icon} />
          <h1>Entrar</h1>
        </section>
      </div>
    </div>
  );
};

export default NavMobile;

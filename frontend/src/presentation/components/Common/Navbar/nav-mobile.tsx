import React from "react";

import { NavItems } from "@/data";
import SingleNavItem from "@/presentation/components/Common/Navbar/nav-item";

import { AiOutlineClose } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

import styles from "@/presentation/components/Common/Navbar/nav-mobile.module.scss";

type MobileNavProps = {
  closeSideMenu: () => void;
};

const IconWithProps = (
  props: IconBaseProps & { onClick?: () => void; className?: string }
) => {
  const { onClick, className, children, ...restProps } = props;
  return (
    <span onClick={onClick} className={className}>
      {React.cloneElement(children as React.ReactElement, restProps)}
    </span>
  );
};

const MobileNav = ({ closeSideMenu }: MobileNavProps) => {
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
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
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

export default MobileNav;

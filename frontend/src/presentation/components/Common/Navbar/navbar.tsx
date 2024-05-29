"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { NavItems } from "@/data";
import { Images } from "@/presentation/assets";
import NavMobile from "@/presentation/components/Common/Navbar/nav-mobile";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IconBaseProps } from "react-icons";

import styles from "@/presentation/components/Common/Navbar/navbar.module.scss";

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

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <nav className={styles.navbar}>
      <section ref={animationParent} className={styles["left-section"]}>
        <Image src={Images.logoWhite} alt="Logo" className={styles.logo} />
        {isSideMenuOpen && <NavMobile closeSideMenu={closeSideMenu} />}
        <div className={styles["nav-items"]}>
          {NavItems.map((d, i) => (
            <Link key={i} href={d.link ?? "#"} className={styles["nav-link"]}>
              <p className={styles["link-text"]}>
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown
                    className={`${styles["arrow-icon"]} ${styles["rotate-180"]}`}
                  />
                )}
              </p>
              {d.children && (
                <div className={styles.dropdown}>
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className={styles["dropdown-link"]}
                    >
                      {ch.iconImage && (
                        <Image
                          src={ch.iconImage}
                          alt="ícone do item"
                          className="icon-image"
                        />
                      )}
                      <span className={styles["link-label"]}>{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles["right-section"]}>
        <button className={styles["login-btn"]}>Login</button>
        <button className={styles["register-btn"]}>Registrar</button>
      </section>

      <IconWithProps onClick={openSideMenu} className={styles["menu-icon"]}>
        <FiMenu />
      </IconWithProps>
    </nav>
  );
}

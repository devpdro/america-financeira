"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { IconWithProps } from "@/presentation/utils";
import { Images, Icons } from "@/presentation/assets";
import { NavItems } from "@/data";
import { NavMobile } from "..";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import styles from "./navbar.module.scss";

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
        <Image src={Images.logoAmerica} alt="Logo" className={styles.logo} />
        {isSideMenuOpen && <NavMobile closeSideMenu={closeSideMenu} />}
        <div className={styles["nav-items"]}>
          {NavItems.map((d, i) => (
            <div key={i} className={styles["nav-link"]}>
              {/* Aplicação correta do Link para elementos clicáveis */}
              <Link legacyBehavior href={d.link ?? "#"}>
                <a className={styles["link-text"]}>
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown
                      className={`${styles["arrow-icon"]} ${styles["rotate-180"]}`}
                    />
                  )}
                </a>
              </Link>
              {d.children && (
                <div className={styles.dropdown}>
                  {d.children.map((ch: any, j: any) => (
                    <Link legacyBehavior key={j} href={ch.link ?? "#"}>
                      <a className={styles["dropdown-link"]}>
                        {ch.iconImage && (
                          <Image
                            src={ch.iconImage}
                            alt="ícone do item"
                            className={styles["icon-image"]}
                          />
                        )}
                        <span className={styles["link-label"]}>{ch.label}</span>
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles["right-section"]}>
        <Icons.IoPersonOutline className={styles.icon} />
        <h1>Entrar</h1>
      </section>

      <IconWithProps onClick={openSideMenu} className={styles["menu-icon"]}>
        <FiMenu />
      </IconWithProps>
    </nav>
  );
}

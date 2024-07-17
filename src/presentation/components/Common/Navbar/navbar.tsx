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
        <Image
          src={Images.logoAmerica}
          alt="Logo América Financeira"
          className={styles.logo}
        />
        {isSideMenuOpen && <NavMobile closeSideMenu={closeSideMenu} />}
        <div className={styles["nav-items"]}>
          {NavItems.map((item, key) => (
            <div key={key} className={styles["nav-link"]}>
              <Link legacyBehavior href={item.link ?? "#"}>
                <a className={styles["link-text"]}>
                  <span>{item.label}</span>
                  {item.children && (
                    <IoIosArrowDown
                      className={`${styles["arrow-icon"]} ${styles["rotate-180"]}`}
                    />
                  )}
                </a>
              </Link>
              {item.children && (
                <div className={styles.dropdown}>
                  {item.children.map((item, key) => (
                    <Link legacyBehavior key={key} href={item.link} passHref>
                      <a
                        className={styles["dropdown-link"]}
                        target={
                          item.link.startsWith("https://") ? "_blank" : ""
                        }
                        rel="noopener noreferrer"
                      >
                        <span className={styles["link-label"]}>
                          {item.label}
                        </span>
                        {item.new && <p className={styles.new}>{item.new}</p>}
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
        <Link className={styles.link} legacyBehavior href="/login">
          <span>Entrar</span>
        </Link>
      </section>

      <IconWithProps onClick={openSideMenu} className={styles["menu-icon"]}>
        <FiMenu />
      </IconWithProps>
    </nav>
  );
}

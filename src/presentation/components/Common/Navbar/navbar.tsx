"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { NavMobile } from "@/presentation/components/common";
import { Images, Icons } from "@/presentation/assets";
import { IconWithProps } from "@/presentation/utils";
import { NavItems } from "@/data";

import styles from "./navbar.module.scss";

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <section ref={animationParent} className={styles["left-section"]}>
        <Link href="/" legacyBehavior>
          <a aria-label="Logo América Financeira">
            <Image
              src={Images.logoAmericaBlue}
              alt="Logo América Financeira"
              className={styles.logo}
            />
          </a>
        </Link>
        {isSideMenuOpen && (
          <NavMobile closeSideMenu={() => setSideMenu(false)} />
        )}
        <div className={styles["nav-items"]}>
          {NavItems.map((item, index) => (
            <div key={index} className={styles["nav-link"]}>
              <Link href={item.link ?? "#"} legacyBehavior>
                <a className={styles["link-text"]}>
                  <span>{item.label}</span>
                  {item.children && (
                    <Icons.IoIosArrowDown
                      className={`${styles["arrow-icon"]} ${styles["rotate-180"]}`}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </Link>
              {item.children && (
                <div className={styles.dropdown}>
                  {item.children.map((child, childIndex) => (
                    <Link key={childIndex} href={child.link} legacyBehavior>
                      <a
                        className={styles["dropdown-link"]}
                        target={
                          child.link.startsWith("https://") ? "_blank" : ""
                        }
                        rel="noopener noreferrer"
                      >
                        <span className={styles["link-label"]}>
                          {child.label}
                        </span>
                        {child.new && <p className={styles.new}>{child.new}</p>}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <aside className={styles["right-section"]}>
        <Icons.IoPersonOutline className={styles.icon} aria-hidden="true" />
        <Link href="/login" legacyBehavior>
          <a className={styles.link}>
            <span>Entrar</span>
          </a>
        </Link>
      </aside>

      <IconWithProps
        onClick={() => setSideMenu(true)}
        className={styles["menu-icon"]}
      >
        <Icons.FiMenu aria-hidden="true" />
      </IconWithProps>
    </nav>
  );
}

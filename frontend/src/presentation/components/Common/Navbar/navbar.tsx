"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { NavItems } from "@/data";
import NavMobile from "@/presentation/components/Common/Navbar/nav-mobile";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IconBaseProps } from "react-icons";

import { Images } from "@/presentation/assets";

import styles from "./navbar.module.scss";

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
      </section>

      <section className={styles["right-section"]}>
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
                          className={styles["icon-image"]}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#111928"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
            clipRule="evenodd"
          ></path>{" "}
        </svg>
      </section>

      <IconWithProps onClick={openSideMenu} className={styles["menu-icon"]}>
        <FiMenu />
      </IconWithProps>
    </nav>
  );
}

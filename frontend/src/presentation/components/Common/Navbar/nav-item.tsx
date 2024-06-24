"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { NavItemTypes } from "@/presentation/@types";
import { Icons } from "@/presentation/assets";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import styles from "./nav-item.module.scss";

const NavItem = ({ label, link, children }: NavItemTypes) => {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  const toggleItem = () => {
    setItem(!isItemOpen);
  };

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={link ?? "#"}
      className={styles["single-nav-item"]}
    >
      <p className={styles["item-label"]}>
        <span>{label}</span>
        {children && (
          <Icons.IoIosArrowDown
            className={`${styles["arrow-icon"]} ${
              isItemOpen && styles["rotate-180"]
            }`}
          />
        )}
      </p>

      {isItemOpen && children && (
        <div className={styles.dropdown}>
          {children.map((ch, i) => (
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
  );
};

export default NavItem;

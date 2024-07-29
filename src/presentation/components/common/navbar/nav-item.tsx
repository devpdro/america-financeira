"use client";

import { useState } from "react";
import Link from "next/link";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { NavItemTypes } from "@/presentation/@types";
import { Icons } from "@/presentation/assets";

import styles from "./nav-item.module.scss";

const NavItem = ({ label, link, children }: NavItemTypes) => {
  const [animationParent] = useAutoAnimate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div ref={animationParent} className={styles["single-nav-item"]}>
      <Link
        onClick={handleClick}
        href={link ?? "#"}
        aria-label={label}
        className={styles["item-link"]}
      >
        <p className={styles["item-label"]}>
          <span>{label}</span>
          {children && (
            <Icons.IoIosArrowDown
              className={`${styles["arrow-icon"]} ${
                isOpen && styles["rotate-180"]
              }`}
              aria-hidden="true"
            />
          )}
        </p>
      </Link>
      {isOpen && children && (
        <div className={styles.dropdown} aria-label={`Submenu de ${label}`}>
          {children.map((item, key) => (
            <Link
              key={key}
              href={item.link ?? "#"}
              className={styles["dropdown-link"]}
              aria-label={item.label}
            >
              <span className={styles["link-label"]}>{item.label}</span>
              <div>{item.new && <p className={styles.new}>{item.new}</p>}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;

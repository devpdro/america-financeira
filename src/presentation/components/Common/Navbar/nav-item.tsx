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
    <Link
      ref={animationParent}
      onClick={handleClick}
      href={link ?? "#"}
      className={styles["single-nav-item"]}
    >
      <p className={styles["item-label"]}>
        <span>{label}</span>
        {children && (
          <Icons.IoIosArrowDown
            className={`${styles["arrow-icon"]} ${
              isOpen && styles["rotate-180"]
            }`}
          />
        )}
      </p>
      {isOpen && children && (
        <div className={styles.dropdown}>
          {children.map((item, key) => (
            <Link
              key={key}
              href={item.link ?? "#"}
              className={styles["dropdown-link"]}
            >
              <span className={styles["link-label"]}>{item.label}</span>
              <div>{item.new && <p className={styles.new}>{item.new}</p>}</div>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default NavItem;

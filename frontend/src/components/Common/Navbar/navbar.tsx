/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";

import logo from "@/assets/icon-todo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/icon-calendar.svg";
import calendarImage from "@/assets/icon-calendar.svg";
import remindersImage from "@/assets/icon-calendar.svg";
import planningImage from "@/assets/icon-calendar.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IconBaseProps } from "react-icons";  // Adicione este import

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Funcionalidades",
    link: "#",
    children: [
      {
        label: "Lista de Tarefas",
        link: "#",
        iconImage: todoImage
      },
      {
        label: "Calendário",
        link: "#",
        iconImage: calendarImage
      },
      {
        label: "Lembretes",
        link: "#",
        iconImage: remindersImage
      },
      {
        label: "Planejamento",
        link: "#",
        iconImage: planningImage
      }
    ]
  },
  {
    label: "Empresa",
    link: "#",
    children: [
      {
        label: "História",
        link: "#"
      },
      {
        label: "Nosso Time",
        link: "#"
      },
      {
        label: "Blog",
        link: "#"
      }
    ]
  },
  {
    label: "Carreiras",
    link: "#"
  },
  {
    label: "Sobre",
    link: "#"
  }
];

// Componente wrapper para estender IconBaseProps
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
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* lado esquerdo */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt="logo" />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      {/* imagem */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="ícone do item" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap pl-3">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* itens do nav */}
      </section>

      {/* lado direito */}
      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Registrar
        </button>
      </section>

      <IconWithProps onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden">
        <FiMenu />
      </IconWithProps>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <IconWithProps onClick={closeSideMenu} className="cursor-pointer text-4xl">
            <AiOutlineClose />
          </IconWithProps>
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
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

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Registrar
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{d.label}</span>
        {d.children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* imagem */}
              {ch.iconImage && <Image src={ch.iconImage} alt="ícone do item" />}
              {/* item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}

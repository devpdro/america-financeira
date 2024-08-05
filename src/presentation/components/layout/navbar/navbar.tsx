'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { NavMobile } from '@/presentation/components/layout'
import { IconWithProps, getLinkAttributes } from '@/utils'
import { Images, Icons } from '@/presentation/assets'
import { nav } from '@/data/ui'
import styles from './navbar.module.scss'

export default function Navbar() {
  const [animationParent] = useAutoAnimate()
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const handleClick = (e: any, link: string) => {
    if (link === '#') {
      e.preventDefault()
    }
  }

  return (
    <nav className={styles.navbar} aria-label="Navegação Principal">
      <section ref={animationParent} className={styles['left-section']} aria-label="Seção de Navegação Esquerda">
        <Link href="/" legacyBehavior>
          <a aria-label="Logo América Financeira">
            <Image src={Images.logoAmerica} alt="Logo América Financeira" className={styles.logo} />
          </a>
        </Link>
        {isSideMenuOpen && <NavMobile closeSideMenu={() => setSideMenu(false)} />}
        <div className={styles['nav-items']} aria-label="Itens de Navegação">
          {nav.map((item, index) => (
            <div key={index} className={styles['nav-link']}>
              <Link href={item.link ?? '#'} legacyBehavior>
                <a
                  className={styles['link-text']}
                  aria-label={item.label}
                  onClick={(e) => handleClick(e, item.link ?? '#')}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <Icons.IoIosArrowDown
                      className={`${styles['arrow-icon']} ${styles['rotate-180']}`}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </Link>
              {item.children && (
                <div className={styles.dropdown} aria-label="Menu Suspenso">
                  {item.children.map((child, childIndex) => (
                    <Link key={childIndex} href={child.link} legacyBehavior>
                      <a
                        className={styles['dropdown-link']}
                        {...getLinkAttributes(child.link)}
                        aria-label={child.label}
                        onClick={(e) => handleClick(e, child.link)}
                      >
                        <span className={styles['link-label']}>{child.label}</span>
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

      <aside className={styles['right-section']} aria-label="Seção de Navegação Direita">
        <Icons.IoPersonOutline className={styles.icon} aria-hidden="true" />
        <Link href="/login" legacyBehavior>
          <a className={styles.link} aria-label="Login">
            <span>Entrar</span>
          </a>
        </Link>
      </aside>

      <IconWithProps onClick={() => setSideMenu(true)} className={styles['menu-icon']} aria-label="Abrir Menu">
        <Icons.FiMenu aria-hidden="true" />
      </IconWithProps>
    </nav>
  )
}

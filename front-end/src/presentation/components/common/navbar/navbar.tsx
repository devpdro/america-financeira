'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { NavMobile } from 'src/presentation/components'
import { IconWithProps, getLinkAttributes } from 'src/utils'
import { IMAGE, ICON } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

const Navbar = () => {
  const [animationParent] = useAutoAnimate()
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const handleClick = (e: any, link: string) => {
    if (link === '#') {
      e.preventDefault()
    }
  }

  return (
    <nav className={S.navbar}>
      <section ref={animationParent} className={S['left-section']}>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={IMAGE.logoWhite} alt="Logo América Financeira" className={S.logo} />
          </a>
        </Link>
        {isSideMenuOpen && <NavMobile closeSideMenu={() => setSideMenu(false)} />}
        <div className={S['nav-items']}>
          {MENU.map((item, index) => (
            <div key={index} className={S['nav-link']}>
              <Link href={item.link ?? '#'} legacyBehavior>
                <a className={S['link-text']} onClick={(e) => handleClick(e, item.link ?? '#')}>
                  <span>{item.label}</span>
                  {item.children && <ICON.IoIosArrowDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                </a>
              </Link>
              {item.children && (
                <div className={S.dropdown}>
                  {item.children.map((child, childIndex) => (
                    <Link key={childIndex} href={child.link} legacyBehavior>
                      <a
                        className={S['dropdown-link']}
                        {...getLinkAttributes(child.link)}
                        onClick={(e) => handleClick(e, child.link)}
                      >
                        <span className={S['link-label']}>{child.label}</span>
                        {child.new && <p className={S.new}>{child.new}</p>}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <aside className={S['right-section']}>
        <ICON.BiNetworkChart className={S.icon} />
        <Link href="/intranet" legacyBehavior>
          <a className={S.link}>
            <span>Intranet</span>
          </a>
        </Link>
      </aside>

      <IconWithProps onClick={() => setSideMenu(true)} className={S['menu-icon']}>
        <ICON.FiMenu aria-hidden="true" />
      </IconWithProps>
    </nav>
  )
}

export default Navbar

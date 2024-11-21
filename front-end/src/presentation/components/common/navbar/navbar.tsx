'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { IconWithProps, getLinkAttributes } from 'src/utils'
import { NavMobile } from 'src/presentation/components'
import { IMAGE, ICON } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const handleClick = (e: any, link: string) => {
    if (link === '#') {
      e.preventDefault()
    }
  }

  return (
    <nav className={S.navbar}>
      <section className={S['left-section']}>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={IMAGE.LOGO_AMERICA_FINANCEIRA_SEGURO} alt="Logo América Financeira" className={S.logo} />
          </a>
        </Link>
        {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
            <div key={key} className={S['nav-link']}>
              <Link href={item.link ?? '#'} legacyBehavior>
                <a className={S['link-text']} onClick={(e) => handleClick(e, item.link ?? '#')}>
                  <span>{item.label}</span>
                  {item.children && <ICON.IconCaretUp className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                </a>
              </Link>
              {item.children && (
                <div className={S.dropdown}>
                  {item.children.map((item: any, key: number) => (
                    <Link key={key} href={item.link} legacyBehavior>
                      <a
                        className={S['dropdown-link']}
                        {...getLinkAttributes(item.link)}
                        onClick={(e) => handleClick(e, item.link)}
                      >
                        <span className={S['link-label']}>{item.label}</span>
                        {item.new && <p className={S.new}>{item.new}</p>}
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
        <ICON.IconUser className={S.icon} />
        <Link href="/intranet" legacyBehavior>
          <a className={S.link}>
            <span>Intranet</span>
          </a>
        </Link>
      </aside>

      <IconWithProps onClick={() => setSideMenu(true)} className={S['menu-icon']}>
        <ICON.IconMenu3 />
      </IconWithProps>
    </nav>
  )
}

export default Navbar

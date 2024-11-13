import Link from 'next/link'

import { NavItem } from 'src/presentation/components/common'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { IconWithProps } from 'src/utils'
import { MENU } from 'src/data/ui'

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeSideMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeSideMenu()
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <IconWithProps onClick={closeSideMenu} className={S['close-icon']}>
            <ICON.AiOutlineClose />
          </IconWithProps>
        </section>
        <div className={S['nav-items']}>
          {MENU.map(({ item }, key) => (
            <NavItem key={key} label={item.label} new={item.new} link={item.link} onClick={handleClick} blank="none">
              {item.children}
            </NavItem>
          ))}
        </div>
        <section className={S['auth-buttons']}>
          <Link href="/intranet" legacyBehavior>
            <a className={S.link}>
              <span>Intranet</span>
            </a>
          </Link>
          <ICON.BiNetworkChart className={S.icon} />
        </section>
      </nav>
    </div>
  )
}

export default NavMobile

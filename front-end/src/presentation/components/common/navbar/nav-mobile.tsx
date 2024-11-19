import Link from 'next/link'

import { NavItem } from 'src/presentation/components/common'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { IconWithProps } from 'src/utils'
import { MENU } from 'src/data/ui'

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeMenu()
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <IconWithProps onClick={closeMenu} className={S['close-icon']}>
            <ICON.IconX />
          </IconWithProps>
        </section>
        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
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
          <ICON.IconArrowDown className={S.icon} />
        </section>
      </nav>
    </div>
  )
}

export default NavMobile

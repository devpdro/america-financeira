import Link from 'next/link'

import { NavItem } from '@/presentation/components/common'
import { NavMobileProps } from '@/data/models'
import { Icons } from '@/presentation/assets'
import { IconWithProps } from '@/utils'
import { nav } from '@/data/ui'

import styles from './nav-mobile.module.scss'

const NavMobile = ({ closeSideMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeSideMenu()
  }

  return (
    <div className={styles['mobile-nav-container']} aria-label="Navegação Móvel">
      <nav className={styles['mobile-nav']} aria-label="Menu de Navegação Móvel">
        <section className={styles['close-section']}>
          <IconWithProps onClick={closeSideMenu} className={styles['close-icon']} aria-label="Fechar Menu">
            <Icons.AiOutlineClose aria-hidden="true" />
          </IconWithProps>
        </section>
        <div className={styles['nav-items']} aria-label="Itens de Navegação">
          {nav.map((item, key) => (
            <NavItem key={key} label={item.label} new={item.new} link={item.link} onClick={handleClick}>
              {item.children}
            </NavItem>
          ))}
        </div>
        <section className={styles['auth-buttons']} aria-label="Botões de Autenticação">
          <Link href="/intranet" legacyBehavior>
            <a className={styles.link} aria-label="Login">
              <span aria-label="Intranet">Intranet</span>
            </a>
          </Link>
          <Icons.BiNetworkChart className={styles.icon} aria-hidden="true" />
        </section>
      </nav>
    </div>
  )
}

export default NavMobile

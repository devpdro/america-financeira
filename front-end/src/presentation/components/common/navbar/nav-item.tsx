'use client'

import { useState } from 'react'
import Link from 'next/link'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { ICON } from 'src/presentation/assets'
import { ItemProps } from 'src/data/models'

import S from './nav-item.module.scss'

const NavItem = ({ label, link, children }: ItemProps) => {
  const [animationParent] = useAutoAnimate()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div ref={animationParent} className={S['single-nav-item']}>
      <Link onClick={handleClick} href={link ?? '#'} className={S['item-link']}>
        <p className={S['item-label']}>
          <span>{label}</span>
          {children && <ICON.IoIosArrowDown className={`${S['arrow-icon']} ${isOpen && S['rotate-180']}`} />}
        </p>
      </Link>
      {isOpen && children && (
        <div className={S.dropdown}>
          {children.map((item, key) => (
            <Link key={key} href={item.link ?? '#'} className={S['dropdown-link']}>
              <span className={S['link-label']}>{item.label}</span>
              <div>{item.new && <p className={S.new}>{item.new}</p>}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavItem

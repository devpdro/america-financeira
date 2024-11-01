import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'

import { FaGraduationCap, FaChartPie, FaRegFileAlt } from 'react-icons/fa'

import { IconType } from 'react-icons'

import * as S from './sidebar-styles'

export interface MenuItem {
  name: string
  link: string
  icon: IconType
  margin?: boolean
}

const Menu: MenuItem[] = [
  {
    name: 'Painel',
    link: '/painel',
    icon: FaChartPie,
  },
  {
    name: 'Hot Academy',
    link: '/hot-academy',
    icon: FaGraduationCap,
    margin: true,
  },
  { name: 'Roteiros Operacionais', link: '/roteiros-operacionais', icon: FaRegFileAlt },
]

const Sidebar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const index = Menu.findIndex((menu) => menu.link === router.pathname)
    setActiveIndex(index !== -1 ? index : null)
  }, [router.pathname])

  const handleMenuItemClick = (index: number, link: string) => {
    if (activeIndex !== index) {
      setActiveIndex(index)
      router.push(link)
    }
  }

  return (
    <S.Container>
      <S.Sidebar open={open}>
        <S.MainMenu>
          <HiMenuAlt3 size={28} style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} />
        </S.MainMenu>
        <S.ContainerItem>
          {Menu?.map((menu: MenuItem, i: number) => (
            <S.SideLink key={i} onClick={() => handleMenuItemClick(i, menu?.link)}>
              <S.MenuItem className={i === activeIndex ? 'active' : ''} margin={menu?.margin}>
                <div style={{ marginTop: '0.250rem' }}>{React.createElement(menu?.icon, { size: '24' })}</div>
                <S.MenuLabel open={open} index={i}>
                  {menu?.name}
                </S.MenuLabel>
              </S.MenuItem>
            </S.SideLink>
          ))}
        </S.ContainerItem>
      </S.Sidebar>
    </S.Container>
  )
}

export default Sidebar

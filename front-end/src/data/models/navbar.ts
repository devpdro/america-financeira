export interface NavbarItemProps {
  label: string
  link: string
  new: string
  blank: string
  children: NavbarItemProps[]
  onClick: () => void
}

export type NavMobileProps = {
  closeMenu: () => void
}

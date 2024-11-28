export interface NavbarItemProps {
  label: string
  link: string
  new?: string
  blank?: string
  children?: NavbarItemProps[]
  onClick?: () => void
  closeMenu?: () => void
}

export type NavMobileProps = {
  closeMenu: () => void
}

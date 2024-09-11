export type NavItemProps = {
  label: string
  link: string
  new?: string
  blank?: string
  children?: NavItemProps[]
  onClick?: () => void
}

export type NavMobileProps = {
  closeSideMenu: () => void
}

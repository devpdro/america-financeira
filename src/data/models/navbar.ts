export type NavItemProps = {
  label: string
  link: string
  new?: string
  blank?: string
  children?: NavItemProps[]
}

export type NavMobileProps = {
  closeSideMenu: () => void
}

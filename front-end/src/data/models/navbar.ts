export type ItemProps = {
  label: string
  link: string
  new: string
  blank: string
  children: ItemProps[]
  onClick: () => void
}

export type NavMobileProps = {
  closeSideMenu: () => void
}

export interface IntranetItemsProps {
  label: string
  url: string
}

export interface IntranetProps {
  id: string
  title: string
  items: IntranetItemsProps[]
}

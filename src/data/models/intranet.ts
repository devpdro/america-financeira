export interface IntranetItem {
  label: string
  url: string
}

export interface IntranetItems {
  id: string
  title: string
  items: IntranetItem[]
}

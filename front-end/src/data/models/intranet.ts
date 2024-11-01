import { StaticImageData } from 'next/image'
export interface IntranetItemsProps {
  label: string
  url: string
  image: StaticImageData
}

export interface IntranetProps {
  id: string
  title: string

  items: IntranetItemsProps[]
}

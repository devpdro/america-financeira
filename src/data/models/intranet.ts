import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

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

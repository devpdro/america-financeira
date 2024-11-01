import { StaticImageData } from 'next/image'

export type BenefitsItemProps = {
  title: string
  subtitle: string
  image: StaticImageData
}

export type BenefitsProps = {
  title: React.ReactNode
  subtitle: React.ReactNode
  imageWidth?: number
  imageHeight?: number
  items: BenefitsItemProps[]
}

export type CarouselProps = {
  title?: React.ReactNode
  subtitle?: string
}

export type CarouselItemsProps = {
  key: number
  link: string
}

export type CombinedCarouselTypes = CarouselProps & CarouselItemsProps

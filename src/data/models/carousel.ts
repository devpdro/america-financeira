export type CarouselTypes = {
  title?: React.ReactNode;
  subtitle?: string;
};

export type CarouselItemsTypes = {
  key: number;
  link: string;
};

export type CombinedCarouselTypes = CarouselTypes & CarouselItemsTypes;

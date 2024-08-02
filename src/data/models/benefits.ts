import { StaticImageData } from "next/image";

export type BenefitsItemTypes = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

export type BenefitsTypes = {
  title: React.ReactNode;
  subtitle: string;
  imageWidth?: number;
  imageHeight?: number;
  items: BenefitsItemTypes[];
};

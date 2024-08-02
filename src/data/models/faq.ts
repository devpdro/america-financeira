export type FaqItemTypes = {
  question: string;
  answer: string;
};

export type FaqTypes = {
  title: string;
  items: FaqItemTypes[];
};

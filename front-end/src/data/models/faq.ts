export type FaqItemProps = {
  question: string
  answer: string
}

export type FaqProps = {
  title: string
  items: FaqItemProps[]
}

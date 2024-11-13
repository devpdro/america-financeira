import S from './terms.module.scss'

type ItemProps = {
  title: string
  description: string
}

type TermsProps = {
  title: string
  overview: string
  introduction: string
  conclusion: string
  description: string
  items: ItemProps[]
}

const Terms = ({ title, overview, introduction, items, conclusion, description }: TermsProps) => (
  <div className={S.container}>
    <h1 className={S['title']}>{title}</h1>
    <p className={S.overview}>{overview}</p>
    <h3 className={S['title']}>{introduction}</h3>
    <ul className={S['list-section']}>
      {items.map(({ title, description }, key) => (
        <li className={S.items} key={key}>
          <strong>{title}:</strong> {description}
        </li>
      ))}
    </ul>
    <h1 className={S['title']}>{conclusion}</h1>
    <p className={S.subtitle}>{description}</p>
  </div>
)

export default Terms

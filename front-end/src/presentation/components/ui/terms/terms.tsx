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
    <div className={S['box-section']}>
      <h2 className={S['introduction-title']}>{title}</h2>
      <p className={S.subtitle}>{overview}</p>
      <h2 className={S['introduction-title']}>{introduction}</h2>
      <ul className={S['list-section']}>
        {items.map((item, index) => (
          <li className={S.items} key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
      <h2 className={S['introduction-title']}>{conclusion}</h2>
      <p className={S.subtitle}>{description}</p>
    </div>
  </div>
)

export default Terms

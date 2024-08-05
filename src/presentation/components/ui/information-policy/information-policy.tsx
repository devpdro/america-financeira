import styles from './information-policy.module.scss'

type InformationPolicyProps = {
  title: string
  paragraph: string
  introductionTitle: string
  finishedTitle: string
  finishedParagraph: string
  listItems: {
    title: string
    description: string
  }[]
}

const InformationPolicy: React.FC<InformationPolicyProps> = ({
  title,
  paragraph,
  introductionTitle,
  listItems,
  finishedTitle,
  finishedParagraph,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles['box-section']}>
        <h2 className={styles['introduction-title']}>{title}</h2>
        <p className={styles.subtitle}>{paragraph}</p>
        <h2 className={styles['introduction-title']}>{introductionTitle}</h2>
        <ul className={styles['list-section']}>
          {listItems.map((item, index) => (
            <li className={styles.list} key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
        <h2 className={styles['introduction-title']}>{finishedTitle}</h2>
        <p className={styles.subtitle}>{finishedParagraph}</p>
      </div>
    </section>
  )
}

export default InformationPolicy

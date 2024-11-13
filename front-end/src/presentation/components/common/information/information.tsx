import styles from './information.module.scss'

type InformationProps = {
  title: string
  paragraphs: string[]
}

const Information: React.FC<InformationProps> = ({ title, paragraphs }) => {
  return (
    <section className={styles.container} aria-labelledby="informacao-titulo" aria-describedby="informacao-texto">
      <h1 className={styles.title}>{title}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  ) 
}

export default Information

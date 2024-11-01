import styles from './header-policy.module.scss'

type HeaderPolicyProps = {
  title: string
}

const HeaderPolicy: React.FC<HeaderPolicyProps> = ({ title }) => {
  return (
    <header className={styles.container}>
      <div className={styles['box-section']}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}

export default HeaderPolicy

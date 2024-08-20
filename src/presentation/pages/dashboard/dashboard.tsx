import { Sidebar } from '@/presentation/components/ui'

import styles from './dashboard.module.scss'

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <h1 className={styles.title}>
        Bem vindo, <span>Victor Hugo Pedro</span>
      </h1>
    </main>
  )
}

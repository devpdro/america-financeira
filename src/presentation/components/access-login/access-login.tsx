import { LoginRequest, Button } from '@/presentation/components/form'

import styles from './access-login.module.scss'

const AccessLogin = () => {
  return (
    <main className={styles.container}>
      <div className={styles['box-container']}>
        <div className={styles['text-section']}>
          <h1 className={styles.title}>
            Pra acessar <br /> a Área dos Colaboradores, precisamos <br /> do seu Código de Segurança.
          </h1>
          <input
            placeholder="Digite seu Código de Segurança"
            className={styles['input-text']}
            type="text"
            name=""
            id=""
          />
          <Button typeStyle="btn3" text="Entrar" width="100%" />
        </div>
        <div className={styles['form-section']}>
          <LoginRequest />
        </div>
      </div>
    </main>
  )
}

export default AccessLogin

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { ErrorModal } from '@/presentation/components/feedback'
import { Button } from '@/presentation/components/form'
import { Images } from '@/presentation/assets'

import styles from './login.module.scss'

export type LoginFormProps = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        localStorage.setItem('token', result.token)
        // Redirecionar para a página desejada após o login bem-sucedido
        window.location.href = '/dashboard' // exemplo de redirecionamento
      } else {
        setModalMessage(result.error || 'Erro no login, tente novamente.')
        setIsModalOpen(true)
      }
    } catch (error) {
      setModalMessage('Erro ao conectar-se ao servidor.')
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className={styles.container}>
      <div className={styles['bg-blue']}></div>
      <div className={styles['box-container']}>
        <Link href="/">
          <Image className={styles.logo} src={Images.logoAmericaAzul} alt="Logo América Financeira" />
        </Link>
        <p className={styles.subtitle}>Pra acessar a Área dos Colaboradores, precisamos do seu e-mail e senha.</p>
        <form className={styles['form-section']} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            className={`${styles.input} ${errors.email ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="E-mail"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          <input
            {...register('password', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres',
              },
              pattern: {
                value: /^\d+$/,
                message: 'Senha deve conter apenas números',
              },
            })}
            className={`${styles.input} ${errors.password ? styles['input-text-error'] : ''}`}
            type="password"
            placeholder="Senha"
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          <Button typeStyle="btn3" text={isSubmitting ? 'Entrando...' : 'Entrar'} width="100%" />
        </form>
      </div>
      <ErrorModal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} aria-label="Modal de Login" />
    </section>
  )
}

export default Login

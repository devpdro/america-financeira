'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { StatusModal } from '@/presentation/components/modal'
import { Button } from '@/presentation/components/form'
import { Images } from '@/presentation/assets'

import styles from './auth.module.scss'

export type AuthProps = {
  email: string
  password: string
}

const Auth = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: AuthProps) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const { token } = await response.json()
        localStorage.setItem('auth-token', token) // Armazenando o token no localStorage
        router.push('/painel')
      } else {
        setModalMessage('Email ou senha inválidos.')
        setIsModalOpen(true)
      }
    } catch (error) {
      setModalMessage('Ocorreu um erro ao tentar fazer login.')
      setIsModalOpen(true)
    }
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
          <StatusModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            message={modalMessage}
            aria-label="Modal de Solicitação de Empréstimo"
          />
        </form>
      </div>
    </section>
  )
}

export default Auth

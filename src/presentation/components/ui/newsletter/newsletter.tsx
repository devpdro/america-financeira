'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import emailjs from 'emailjs-com'

import { StatusModal } from '@/presentation/components/modal'
import { Button } from '@/presentation/components/form'

import styles from './newsletter.module.scss'

export type NewsLetterProps = {
  nome: string
  email: string
}

const NewsLetter: React.FC = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsLetterProps>({
    defaultValues: {
      nome: '',
      email: '',
    },
  })

  const onSubmit = async (data: NewsLetterProps, event: any) => {
    try {
      if (!data.email) {
        setModalMessage('Por favor, preencha o email.')
        setIsModalOpen(true)
        return
      }

      await emailjs.sendForm('gmailContact', 'template_oekruyi', event.target, 'GSlDlk4aAeWqGnnRW')
      setModalMessage('Email cadastrado com sucesso!')
      reset()
    } catch (error) {
      console.error('Erro ao cadastrar email:', error)
      setModalMessage('Erro ao cadastrar email. Por favor, tente novamente mais tarde.')
    } finally {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className={styles.newsletterContainer}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterText}>
          <h1 className={styles.title}>Esteja sempre atualizado!</h1>
          <p className={styles.subtitle}>Receba as últimas notícias e atualizações diretamente no seu email.</p>
        </div>
        <div className={styles.newsletterForm}>
          <form className={styles.form} id="newsletterForm" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              <input
                className={`${styles.input} ${errors.nome && styles.input_error}`}
                autoComplete="new-password"
                type="text"
                id="nome"
                placeholder="Nome"
                {...register('nome', {
                  minLength: {
                    value: 4,
                    message: 'Nome deve ter no mínimo 4 caracteres',
                  },
                })}
              />
              <input
                className={`${styles.input} ${errors.email && styles.input_error}`}
                autoComplete="new-password"
                type="text"
                id="email"
                placeholder="E-mail"
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
                    message: 'E-mail inválido',
                  },
                })}
              />{' '}
              <Button typeStyle="btn5" width="100%" text="Inscrever" />
            </div>
          </form>
        </div>
      </div>

      <StatusModal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} aria-label="Modal de Newsletter" />
    </section>
  )
}

export default NewsLetter

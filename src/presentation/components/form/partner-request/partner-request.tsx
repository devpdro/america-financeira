'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { StatusModal } from '@/presentation/components/feedback'
import { Button } from '@/presentation/components/form'

import styles from './partner-request.module.scss'
import Image from 'next/image'
import { Images } from '@/presentation/assets'

export type PartnerRequestProps = {
  nome: string
  email: string
  whatsapp: string
  cpf: string
  estado: string
  cidade: string
  termos: boolean
}

const PartnerRequest: React.FC = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerRequestProps>({
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      cpf: '',
      estado: '',
      cidade: '',
    },
  })

  const onSubmit = async (data: PartnerRequestProps) => {
    try {
      const response = await fetch('/api/submit-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Não foi possível processar a solicitação. Por favor, tente novamente mais tarde.')
      }

      setModalMessage('Obrigado! Em breve entraremos em contato.')
      reset()
    } catch (error) {
      setModalMessage('Ops! Por favor, tente novamente mais tarde.')
    } finally {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles['bg-blue']}>a</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-label="Formulário de Solicitação de Parceria"
      >
        <fieldset>
          <div className={styles['box-title']}>
            <Image className={styles.img} src={Images.logoAmerica} alt="Logo América Financeira" />
            <div>
              <p className={styles['text-america']}>América Financeira</p>
              <legend className={styles.title} aria-label="Título do Formulário">
                Formulário de Inscrição do Programa de Parceiros
              </legend>
              <p className={styles.subtitle}>
                Olá 👋 Obrigado pelo seu interesse em se tornar um parceiro da America Financeira. Por favor, preencha o
                formulário abaixo e nossa equipe de parcerias entrará em contato em breve. Estamos ansiosos para
                analisar sua aplicação 🙌
              </p>
            </div>
          </div>

          <input
            {...register('nome', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 4,
                message: 'Nome deve ter no mínimo 4 caracteres',
              },
            })}
            className={`${styles['input-text']} ${errors.nome ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="Nome"
            aria-invalid={errors.nome ? 'true' : 'false'}
            aria-describedby="nome-error"
          />
          {errors.nome && (
            <span id="nome-error" className={styles.error}>
              {errors.nome.message}
            </span>
          )}

          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            className={`${styles['input-text']} ${errors.email ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="E-mail"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span id="email-error" className={styles.error}>
              {errors.email.message}
            </span>
          )}

          <InputMask
            {...register('whatsapp', {
              required: 'Whatsapp é obrigatório',
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: 'Whatsapp inválido',
              },
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${styles['input-text']} ${errors.whatsapp ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="Whatsapp"
            aria-invalid={errors.whatsapp ? 'true' : 'false'}
            aria-describedby="whatsapp-error"
          />
          {errors.whatsapp && (
            <span id="whatsapp-error" className={styles.error}>
              {errors.whatsapp.message}
            </span>
          )}

          <InputMask
            {...register('cpf', {
              required: 'CPF é obrigatório',
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: 'CPF inválido',
              },
            })}
            mask="999.999.999-99"
            maskChar=""
            className={`${styles['input-text']} ${errors.cpf ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="CPF"
            aria-invalid={errors.cpf ? 'true' : 'false'}
            aria-describedby="cpf-error"
          />
          {errors.cpf && (
            <span id="cpf-error" className={styles.error}>
              {errors.cpf.message}
            </span>
          )}

          <input
            {...register('estado', {
              required: 'Estado é obrigatório',
            })}
            className={`${styles['input-text']} ${errors.estado ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="Estado"
            aria-invalid={errors.estado ? 'true' : 'false'}
            aria-describedby="estado-error"
          />
          {errors.estado && (
            <span id="estado-error" className={styles.error}>
              {errors.estado.message}
            </span>
          )}

          <input
            {...register('cidade', {
              required: 'Cidade é obrigatória',
            })}
            className={`${styles['input-text']} ${errors.cidade ? styles['input-text-error'] : ''}`}
            type="text"
            placeholder="Cidade"
            aria-invalid={errors.cidade ? 'true' : 'false'}
            aria-describedby="cidade-error"
          />
          {errors.cidade && (
            <span id="cidade-error" className={styles.error}>
              {errors.cidade.message}
            </span>
          )}

          <Button
            typeStyle="btn3"
            width="100%"
            text={isSubmitting ? 'Enviando' : 'Enviar'}
            aria-label={isSubmitting ? 'Enviando' : 'Enviar'}
          />
        </fieldset>
      </form>

      <StatusModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        aria-label="Modal de Solicitação de Parceria"
      />
    </div>
  )
}

export default PartnerRequest

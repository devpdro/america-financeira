'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { StatusModal } from '@/presentation/components/modal'
import { Button } from '@/presentation/components/form'

import styles from './loan-request.module.scss'

export type LoanRequestProps = {
  nome: string
  email: string
  whatsapp: string
  cpf: string
  tipoSolicitacao: string
  termos: boolean
}

const LoanRequest: React.FC = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoanRequestProps>({
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      cpf: '',
    },
  })

  const onSubmit = async (data: LoanRequestProps) => {
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-label="Formulário de Solicitação de Empréstimo"
      >
        <fieldset>
          <legend className={styles.title} aria-label="Título do Formulário">
            O dinheiro que você precisa, com as menores taxas.
          </legend>
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

          <select
            className={`${styles['input-text']} ${errors.tipoSolicitacao ? styles['input-text-error'] : ''}`}
            {...register('tipoSolicitacao', {
              required: 'Tipo de solicitação é obrigatório',
            })}
            aria-invalid={errors.tipoSolicitacao ? 'true' : 'false'}
            aria-describedby="tipoSolicitacao-error"
          >
            <option value="" disabled hidden>
              Qual tipo de solicitação?
            </option>
            <option className={styles['option']} value="Credito Pessoal">
              Crédito Pessoal
            </option>
            <option className={styles['option']} value="Credito Consignado">
              Crédito Consignado
            </option>
            <option className={styles['option']} value="Antecipação FGTS">
              Antecipação FGTS
            </option>
            <option className={styles['option']} value="Cartão de Crédito">
              Cartão de Crédito
            </option>
          </select>

          <div className={styles['terms-box']}>
            <input
              className={`${styles.checkbox} ${errors.termos ? styles['checkbox-error'] : ''}`}
              type="checkbox"
              {...register('termos', {
                required: 'Você deve aceitar os termos para continuar',
              })}
              name="termos"
              id="termos"
              aria-invalid={errors.termos ? 'true' : 'false'}
              aria-describedby="termos-error"
            />
            <label className={styles['label-checkbox']} htmlFor="termos">
              Aceito receber comunicações da América Financeira
            </label>
          </div>

          <Button
            typeStyle="btn1"
            width="100%"
            text={isSubmitting ? 'Contratando' : 'Quero contratar'}
            aria-label={isSubmitting ? 'Contratando' : 'Quero contratar'}
          />
        </fieldset>
      </form>

      <StatusModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        aria-label="Modal de Solicitação de Empréstimo"
      />
    </div>
  )
}

export default LoanRequest

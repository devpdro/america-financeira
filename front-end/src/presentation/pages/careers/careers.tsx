import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'

import { Meta, Button, Modal } from 'src/presentation/components'

import S from './careers.module.scss'

type CareersProps = {
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  filialInteresse: string
  cidade: string
  cep: string
  endereco: string
  numero: string
  motivo: string
  curriculo: FileList
}

const Careers = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersProps>({
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      dataNascimento: '',
      filialInteresse: '',
      cidade: '',
      cep: '',
      endereco: '',
      numero: '',
      motivo: '',
      curriculo: undefined,
    },
  })

  const onSubmit = async (data: CareersProps) => {
    try {
      const formData = new FormData()
      formData.append('nome', data.nome)
      formData.append('email', data.email)
      formData.append('telefone', data.telefone)
      formData.append('dataNascimento', data.dataNascimento)
      formData.append('filialInteresse', data.filialInteresse)
      formData.append('cidade', data.cidade)
      formData.append('cep', data.cep)
      formData.append('endereco', data.endereco)
      formData.append('numero', data.numero)
      formData.append('motivo', data.motivo)
      if (data.curriculo?.[0]) {
        formData.append('curriculo', data.curriculo[0])
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
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

  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <Meta
        title="Formulário de Inscrição"
        description="Formulário para candidatura na América Financeira."
        keywords="candidatura, America Financeira, formulário"
      />

      <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
        <fieldset>
          <div className={S['box-title']}>
            <div>
              <p className={S['text-america']}>América Financeira</p>
              <legend className={S.title}>Formulário de Candidatura</legend>
              <p className={S.subtitle}>
                Olá 👋 Obrigado pelo seu interesse em se juntar à nossa equipe! Por favor, preencha o formulário abaixo
                e nossa equipe entrará em contato em breve. Estamos ansiosos para analisar sua candidatura 🙌
              </p>
            </div>
          </div>

          <input
            {...register('nome', { required: 'Nome é obrigatório' })}
            className={`${S['input-text']} ${errors.nome ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Nome"
          />
          {errors.nome && <span className={S.error}>{errors.nome.message}</span>}

          <input
            {...register('telefone', { required: 'Telefone é obrigatório' })}
            className={`${S['input-text']} ${errors.telefone ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Telefone"
          />
          {errors.telefone && <span className={S.error}>{errors.telefone.message}</span>}

          <input
            {...register('dataNascimento', { required: 'Data de Nascimento é obrigatória' })}
            className={`${S['input-text']} ${errors.dataNascimento ? S['input-text-error'] : ''}`}
            type="date"
            placeholder="Data de Nascimento"
          />
          {errors.dataNascimento && <span className={S.error}>{errors.dataNascimento.message}</span>}

          <select
            {...register('filialInteresse', { required: 'Filial de Interesse é obrigatória' })}
            className={`${S['input-text']} ${errors.filialInteresse ? S['input-text-error'] : ''}`}
          >
            <option value="">Selecione</option>
            <option value="Filial 1">Filial 1</option>
            <option value="Filial 2">Filial 2</option>
            <option value="Filial 3">Filial 3</option>
          </select>
          {errors.filialInteresse && <span className={S.error}>{errors.filialInteresse.message}</span>}

          <input
            {...register('cidade', { required: 'Cidade é obrigatória' })}
            className={`${S['input-text']} ${errors.cidade ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Cidade"
          />
          {errors.cidade && <span className={S.error}>{errors.cidade.message}</span>}

          <input
            {...register('cep', { required: 'CEP é obrigatório' })}
            className={`${S['input-text']} ${errors.cep ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="CEP"
          />
          {errors.cep && <span className={S.error}>{errors.cep.message}</span>}

          <input
            {...register('endereco', { required: 'Endereço é obrigatório' })}
            className={`${S['input-text']} ${errors.endereco ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Endereço"
          />
          {errors.endereco && <span className={S.error}>{errors.endereco.message}</span>}

          <input
            {...register('numero', { required: 'Número é obrigatório' })}
            className={`${S['input-text']} ${errors.numero ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Número"
          />
          {errors.numero && <span className={S.error}>{errors.numero.message}</span>}

          <textarea
            {...register('motivo', { required: 'Por que gostaria de trabalhar conosco?' })}
            className={`${S['input-text']} ${errors.motivo ? S['input-text-error'] : ''}`}
            placeholder="Por que gostaria de trabalhar na América Financeira?"
          />
          {errors.motivo && <span className={S.error}>{errors.motivo.message}</span>}

          <input
            {...register('curriculo', { required: 'Currículo é obrigatório' })}
            className={`${S['input-text']} ${errors.curriculo ? S['input-text-error'] : ''}`}
            type="file"
            accept=".pdf"
          />
          {errors.curriculo && <span className={S.error}>{errors.curriculo.message}</span>}

          <Button typeStyle="btn3" width="100%" label={isSubmitting ? 'Enviando...' : 'Enviar'} />
        </fieldset>
      </form>

      <Modal open={isModalOpen} close={closeModal} message={modalMessage} />
    </div>
  )
}

export default Careers

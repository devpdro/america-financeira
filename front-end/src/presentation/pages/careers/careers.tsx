import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Meta, Button, Modal, Header, Candidate } from 'src/presentation/components'
import { ICON, IMAGE } from 'src/presentation/assets'

import S from './careers.module.scss'

import { IconCoin, IconCake, IconSchool, IconTrophy, IconAward } from '@tabler/icons-react'

const BENEFITS = [
  { title: 'PLR + Bônus', icon: <IconCoin size={34} /> },
  { title: 'Day Off Aniversário', icon: <IconCake size={34} /> },
  { title: 'Programas de desenvolvimento', icon: <IconSchool size={34} /> },
  { title: 'Gamificação', description: '(em certificações e desenvolvimento)', icon: <IconTrophy size={34} /> },
  { title: 'Programa de reconhecimento por tempo de casa', icon: <IconAward size={34} /> },
]

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
      <Header
        title="Carreiras"
        subtitle={`É hora de expandir sua \ncarreira com a América`}
        paragraph="*Entre para o nosso time"
        image={IMAGE.EMPRESTIMO_CONSIGNADO_APOSENTADOS}
      />

      <Candidate position="left" />

      <div className={S['about-container']}>
        <div className={S['about-section']}>
          <div className={S['image-section']}>
            <Image
              width={100}
              height={98}
              layout="responsive"
              className={S.img}
              src={IMAGE.DUAS_PESSOAS_CONVERSANDO}
              alt=""
            />
          </div>
          <div className={S['text-section']}>
            <h1 className={S.title}>Somos o PAN</h1>
            <p className={S.paragraph}>
              Ágeis, flexíveis e criativos, exploramos possibilidades com disposição e desejo de fazer acontecer, sempre
              prontos para encarar novos desafios. Nutrimos líderes que, além de ter garra, são abertos e empáticos,
              veem na proximidade das relações o elo entre cada um. Nossa missão se faz cumprida quando transformamos a
              vida das pessoas através dos nossos conhecimentos e trabalho em equipe, com uma postura realizadora, temos
              o desejo de fazer acontecer. Dominamos nossos processos e trazemos melhorias para quem deseja ter uma vida
              financeira mais inteligente.
            </p>
            <Link href="#candidate" target="_blank">
              <div className={S['text-team']}>
                <p className={S.text}>Entre para o nosso time</p>
                <ICON.IconArrowRight className={S.icon} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Candidate position="right" />

      <div className={S['benefits-container']}>
        <div className={S['benefits-section']}>
          <div className={S['text-section']}>
            <h3 className={S.subtitle}>Benefícios</h3>
            <h1 className={S.title}>
              Reconhecimento e <br /> desenvolvimento
            </h1>
          </div>

          <div className={S['benefits-box']}>
            {BENEFITS.map(({ title, description, icon }, key) => (
              <div key={key} className={S.box}>
                <div className={S.icon}>{icon}</div>
                <h6 className={S.title}>{title}</h6>
                {description && <p className={S.description}>{description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={S['form-container']} id="candidate">
        <div className={S['text-section']}>
          <h3 className={S.title}>Oportunidades</h3>
          <h1 className={S.subtitle}>Que tal expandir sua carreira no PAN?</h1>
          <p className={S.paragraph}>Se você se adapta bem às mudanças e gosta delas, o PAN é o seu lugar.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
          <fieldset>
            <div className={S['box-title']}>
              <div>
                <p className={S['text-america']}>América Financeira</p>
                <legend className={S.title}>Formulário de Candidatura</legend>
                <p className={S.subtitle}>
                  Olá 👋 Obrigado pelo seu interesse em se juntar à nossa equipe! Por favor, preencha o formulário
                  abaixo e nossa equipe entrará em contato em breve. Estamos ansiosos para analisar sua candidatura 🙌
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
              {...register('curriculo', { required: 'Currículo é obrigatório' })}
              className={`${S['input-text']} ${errors.curriculo ? S['input-text-error'] : ''}`}
              type="file"
              accept=".pdf"
            />
            {errors.curriculo && <span className={S.error}>{errors.curriculo.message}</span>}

            <Button typeStyle="btn3" width="100%" label={isSubmitting ? 'Enviando...' : 'Enviar'} />
          </fieldset>
        </form>
      </div>

      <Modal open={isModalOpen} close={closeModal} message={modalMessage} />
    </div>
  )
}

export default Careers

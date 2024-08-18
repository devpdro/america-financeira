import Head from 'next/head'

import { Auth } from '@/presentation/components/ui'

export default function SignIn() {
  return (
    <main>
      <Head>
        <title>Entrar na Área dos Colaboradores</title>
        <meta
          name="description"
          content="Acesse sua conta na América Financeira para gerenciar seus serviços financeiros de forma segura e prática."
        />
        <meta name="keywords" content="login, América Financeira, acesso, conta, serviços financeiros" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Entrar na Área dos Colaboradores" />
        <meta
          property="og:description"
          content="Acesse sua conta na América Financeira para gerenciar seus serviços financeiros de forma segura e prática."
        />
        <meta property="og:url" content="https://www.americafinanceira.com.br/login" />
        <meta property="og:type" content="website" />
      </Head>
      <Auth />
    </main>
  )
}

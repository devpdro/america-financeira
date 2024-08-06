import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer, Navbar } from '@/presentation/components/layout'
import { ErrorDisplay } from '@/presentation/components/ui'

export default function Error() {
  const router = useRouter()
  const isUnderConstruction = router.query.isUnderConstruction === 'true'

  return (
    <main>
      <Head>
        <title>Página não encontrada</title>
        <meta
          name="description"
          content="Ocorreu um erro. Acesse nossa página inicial para encontrar o que você procura ou entre em contato com nosso suporte."
        />
        <meta name="keywords" content="erro, página não encontrada, América Financeira, suporte, ajuda" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Página não encontrada" />
        <meta
          property="og:description"
          content="Ocorreu um erro. Acesse nossa página inicial para encontrar o que você procura ou entre em contato com nosso suporte."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ErrorDisplay
        title="Ops!"
        subtitle={
          <>
            {isUnderConstruction ? (
              <>
                Esta página está em criação. <br /> Por favor, volte mais tarde.
              </>
            ) : (
              <>
                Não conseguimos encontrar a página que você <br /> está procurando.
              </>
            )}
          </>
        }
        message={
          <>
            {isUnderConstruction ? (
              <>
                Se não sabe para onde ir, qualquer caminho <br />
                serve! - Gato Cheshire, Alice no País das Maravilhas.
              </>
            ) : (
              <>
                Se não sabe para onde ir, qualquer caminho <br />
                serve! - Gato Cheshire, Alice no País das Maravilhas.
              </>
            )}
          </>
        }
      />
      <Footer />
    </main>
  )
}

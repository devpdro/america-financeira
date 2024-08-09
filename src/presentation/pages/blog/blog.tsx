import Head from 'next/head'

import { Images } from '@/presentation/assets'
import { FollowUs, Information } from '@/presentation/components/common'
import { Footer, Navbar } from '@/presentation/components/layout'
import BlogHeader from '@/presentation/components/ui/blog/blog-header'
import BlogPage from '@/presentation/components/ui/blog/blog-recent'

export default function Blog() {
  const title = 'Nosso blog'
  const paragraphs = [
    'Bem-vindo ao nosso blog! Aqui você encontrará uma variedade de artigos e dicas sobre finanças, investimentos, e muito mais. Nosso objetivo é fornecer conteúdo relevante e atualizado para ajudar você a tomar decisões financeiras informadas. Aproveite para explorar nossos diversos artigos e se manter sempre bem informado.',
    'Explore nossos artigos e descubra como você pode melhorar sua vida financeira com as informações e dicas que compartilhamos. Estamos comprometidos em oferecer conteúdo de qualidade para nossos leitores.',
    'Nosso blog é atualizado regularmente com novas postagens e insights sobre o mercado financeiro. Fique por dentro das últimas novidades e tendências, e aproveite ao máximo nossos recursos exclusivos. Não deixe de acompanhar nossas publicações e compartilhar seus artigos favoritos com amigos e familiares.',
  ]

  return (
    <>
      <Head>
        <title>Blog da América Financeira: sua parceira em cada Passo Financeiro</title>

        <meta
          name="description"
          content="Explore o blog da América Financeira para artigos, dicas e novidades sobre finanças, investimentos, e muito mais. Atualizado regularmente para manter você informado."
        />
        <meta
          name="keywords"
          content="blog, finanças, investimentos, dicas financeiras, América Financeira, mercado financeiro, notícias financeiras"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Blog - América Financeira" />
        <meta
          property="og:description"
          content="Visite o blog da América Financeira para artigos e dicas sobre finanças e investimentos. Mantenha-se informado com as últimas novidades do mercado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.americafinanceira.com.br/blog" />
        <meta property="og:image" content="/path/to/og-image.jpg" />
      </Head>
      <Navbar />
      <BlogHeader
        image={Images.headerBlog.src}
        imageWidth={100}
        imageHeight={91}
        alt="Nosso Blog"
        subtitle="Dicas e Novidades"
        title="Nosso Blog"
        paragraph="No nosso blog, você encontrará artigos, notícias e dicas sobre finanças, investimentos e muito mais. Estamos comprometidos em oferecer conteúdo de qualidade para ajudar você a tomar decisões financeiras informadas e melhorar sua vida financeira."
        buttonPrimaryText="Leia mais"
        imagePosition="right"
      />
      <BlogPage />
      <Information title={title} paragraphs={paragraphs} />
      <FollowUs />
      <Footer />
    </>
  )
}

import Head from 'next/head'

import { FollowUs, Information } from '@/presentation/components/common'
import { BlogHeader, BlogRecent } from '@/presentation/components/ui'
import { informationBlog } from '@/data/ui'
import { Images } from '@/presentation/assets'

export default function Blog() {
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
      <BlogRecent />
      <Information title={informationBlog[0].title} paragraphs={informationBlog[0].paragraphs} />
      <FollowUs />
    </>
  )
}

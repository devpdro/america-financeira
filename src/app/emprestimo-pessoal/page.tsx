import Head from "next/head";

import {
  Navbar,
  Header,
  BlogHighlights,
  Faq,
  Footer,
  Decorative,
  Benefits,
  Wrapper,
} from "@/presentation/components/common";
import { Banks } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import { BenefitsLoanPersonalItems, FaqPersonalLoanItems } from "@/data";

export default function PersonalLoan() {
  const backgroundImageUrl = Images.doisIdosos || { src: "" };

  return (
    <>
      <Head>
        <title>Empréstimo Pessoal: Rápido, Seguro e 100% Online</title>
        <meta
          name="description"
          content="Solicite um empréstimo pessoal com condições exclusivas. Empréstimo rápido e fácil para atender suas necessidades financeiras pessoais."
        />
        <meta
          name="keywords"
          content="empréstimo pessoal, crédito pessoal, empréstimo rápido, condições exclusivas, América"
        />
        <meta property="og:title" content="Empréstimo Pessoal | América" />
        <meta
          property="og:description"
          content="Solicite um empréstimo pessoal com condições exclusivas. Empréstimo rápido e fácil para atender suas necessidades financeiras pessoais."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Header
        title="Empréstimo Pessoal"
        subtitle={
          <>
            Empréstimo pra você, <br /> rápido e fácil
          </>
        }
        showDetails={false}
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <Wrapper
        image={Images.pessoaSozinha.src}
        imageWidth={100}
        imageHeight={98}
        alt="O que é o Empréstimo Pessoal?"
        subtitle="Sobre o empréstimo pessoal"
        title="O que é o Empréstimo Pessoal?"
        paragraph="O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para indivíduos que necessitam de dinheiro para diversas finalidades pessoais, como pagar dívidas, realizar compras ou lidar com emergências."
        buttonPrimaryText="Simular empréstimo"
        imagePosition="left"
      />
      <Benefits
        title={
          <>
            O crédito de qualidade <br /> que você merece
          </>
        }
        subtitle="Um empréstimo pode ser a solução financeira que você precisa para melhorar sua vida."
        items={BenefitsLoanPersonalItems}
      />
      <Banks />
      <Decorative
        image={Images.cartaoCredito.src}
        imageWidth={91}
        imageHeight={100}
        alt="Imagem de Cartão de Crédito"
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de débito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        imagePosition="left"
      />
      <Decorative
        imageWidth={91}
        imageHeight={100}
        image={Images.investimentos.src}
        alt="Imagem representativa de antecipação de FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <BlogHighlights />
      <Faq
        items={FaqPersonalLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo Pessoal?"
      />
      <Footer />
    </>
  );
}

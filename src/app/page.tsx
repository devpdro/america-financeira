import Head from "next/head";
import {
  Header,
  Navbar,
  Benefits,
  Decorative,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { LoanCarousel } from "@/presentation/components/carousel";
import { Images } from "@/presentation/assets";
import { BenefitsLoanItems, FaqLoanItems } from "@/data";

export default function Home() {
  const backgroundImageUrl = Images.cabecalhoInicial;

  return (
    <>
      <Head>
        <title>Empréstimo Online: América Financeira</title>
        <meta
          name="description"
          content="Solicite seu crédito pessoal, consignado ou FGTS com as melhores condições e taxas. A América oferece soluções financeiras rápidas e fáceis para atender suas necessidades."
        />
        <meta
          name="keywords"
          content="crédito pessoal, empréstimo consignado, antecipação FGTS, soluções financeiras, América"
        />
        <meta
          property="og:title"
          content="Empréstimo Online: América Financeira"
        />
        <meta
          property="og:description"
          content="Solicite seu crédito pessoal, consignado ou FGTS com as melhores condições e taxas. A América oferece soluções financeiras rápidas e fáceis para atender suas necessidades."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Navbar />
        <Header
          title="Solicite seu crédito agora mesmo!"
          subtitle={
            <>
              Realizando sonhos <br /> através do Crédito!
            </>
          }
          showParagraph="*Aqui seu empréstimo é rápido, fácil e descomplicado"
          backgroundImage={backgroundImageUrl.src}
        />
        <LoanCarousel
          subtitle="Ofertas personalizadas"
          title={
            <>
              Escolha o empréstimo <br /> que mais combina com você
            </>
          }
        />
        <Benefits
          title={
            <>
              O crédito de qualidade <br /> que você merece
            </>
          }
          subtitle="Um empréstimo pode ser a solução financeira que você precisa para melhorar sua vida."
          items={BenefitsLoanItems}
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
        <Decorative
          image={Images.cartaoCredito.src}
          imageWidth={91}
          imageHeight={100}
          alt="Imagem de cartão de crédito"
          title="Cartão de Crédito"
          subtitle="A América oferece cartões de crédito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
          paragraph="Solicitar agora"
          imagePosition="left"
        />
        <BlogHighlights />
        <Faq items={FaqLoanItems} title="Ficou com alguma dúvida?" />
        <Footer />
      </main>
    </>
  );
}

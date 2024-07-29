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
          subtitle="Um empréstimo pode ser a solução financeira que você precisa para
          melhorar sua vida."
          imageWidth={100}
          imageHeight={100}
          items={BenefitsLoanItems}
        />
        <Decorative
          imageWidth={91}
          imageHeight={100}
          image={Images.cartaoDebito.src}
          alt="Antecipação FGTS"
          title="Antecipação FGTS"
          subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
          paragraph="Antecipar FGTS"
          imagePosition="right"
        />
        <Decorative
          image={Images.cartaoDebito.src}
          imageWidth={91}
          imageHeight={100}
          alt="Cartão de Crédito"
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

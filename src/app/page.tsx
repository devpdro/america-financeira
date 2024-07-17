import {
  Header,
  Navbar,
  LoanQuality,
  LoanPresentation,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { LoanCarousel } from "@/presentation/components/carousel";
import { Images } from "@/presentation/assets";
import { FaqItems } from "@/data";

export default function Home() {
  const backgroundImageUrl = Images.HeaderInitial;

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
          showDetails={false}
          backgroundImage={backgroundImageUrl.src}
        />
        <LoanCarousel
          subtitle="Ofertas personalizadas"
          title={
            <>
              Escolha o empréstimo que <br /> mais combina com você
            </>
          }
        />
        <LoanQuality />
        <LoanPresentation
          imageWidth={91}
          imageHeight={100}
          image={Images.Investment.src}
          alt="Antecipação FGTS"
          title="Antecipação FGTS"
          subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
          paragraph="Antecipar FGTS"
          imagePosition="right"
        />
        <LoanPresentation
          image={Images.CardCredit.src}
          imageWidth={91}
          imageHeight={100}
          alt="Cartão de Crédito"
          title="Cartão de Crédito"
          subtitle="A América oferece cartões de crédito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
          paragraph="Solicitar agora"
          imagePosition="left"
        />
        <BlogHighlights />
        <Faq items={FaqItems} title="Ficou com alguma dúvida?" />
        <Footer />
      </main>
    </>
  );
}

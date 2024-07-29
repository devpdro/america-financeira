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
  const backgroundImageUrl = Images.HeaderInitial;

  return (
    <div>
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
        image={backgroundImageUrl.src}
        imageWidth={100}
        imageHeight={98}
        alt="O que é o Empréstimo Pessoal?"
        subtitle="Sobre om prestimo pessoal"
        title="O que é o Empréstimo Pessoal?"
        paragraph="O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para indivíduos que necessitam de dinheiro para diversas finalidades pessoais, como pagar dívidas, realizar compras ou lidar com emergências."
        buttonPrimaryText="Simular emprestimo"
        imagePosition="left"
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
        items={BenefitsLoanPersonalItems}
      />
      <Banks />
      <Decorative
        imageWidth={91}
        imageHeight={100}
        image={Images.Investment.src}
        alt="Antecipação FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <Decorative
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
      <Faq
        items={FaqPersonalLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo Pessoal?"
      />
      <Footer />
    </div>
  );
}

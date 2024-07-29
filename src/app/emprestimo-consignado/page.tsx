import {
  Navbar,
  Header,
  HiringBenefits,
  BlogHighlights,
  Faq,
  Footer,
  Benefits,
  Wrapper,
} from "@/presentation/components/common";
import { BenefitsLoanConsignedItems, FaqConsignedLoanItems } from "@/data";
import { Banks } from "@/presentation/components";
import { Images } from "@/presentation/assets";

export default function PayrollLoan() {
  const backgroundImageUrl = Images.HeaderInitial;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo Consignado"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os
            seus sonhos
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        showDetails={true}
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
        items={BenefitsLoanConsignedItems}
      />
      <Banks />
      <HiringBenefits />
      <BlogHighlights />
      <Faq
        items={FaqConsignedLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo Consignado?"
      />
      <Footer />
    </div>
  );
}

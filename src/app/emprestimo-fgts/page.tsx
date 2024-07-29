import {
  Header,
  Navbar,
  Wrapper,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { Banks, FgtsSimulation } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import { FaqFgtsLoanItems } from "@/data";

export default function FgtsAdvance() {
  const backgroundImageUrl = Images.AumentarLucro;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo FGTS"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os
            seus sonhos
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        showDetails={false}
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
        imagePosition="right"
      />
      <FgtsSimulation />
      <Banks />
      <BlogHighlights />
      <Faq
        items={FaqFgtsLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo FGTS?"
      />
      <Footer />
    </div>
  );
}

import {
  Header,
  Navbar,
  Wrapper,
  BlogHighlights,
  Faq,
  Footer,
  Decorative,
} from "@/presentation/components/common";
import { Banks, FgtsSimulation } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import { FaqPersonalLoanItems } from "@/data";

export default function PersonalLoan() {
  const backgroundImageUrl = Images.AumentarLucro;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo FGTS"
        subtitle={
          <>
            Aproveite seu FGTS para <br />
            transformar seus planos <br />
            em realidade
          </>
        }
        showParagraph="*Sujeito à análise de crédito e condições do produto"
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <Wrapper
        image={backgroundImageUrl.src}
        imageWidth={100}
        imageHeight={98}
        alt="Sobre o Empréstimo FGTS"
        subtitle="Descubra o Empréstimo FGTS"
        title="O que é o Empréstimo FGTS?"
        paragraph="O empréstimo FGTS é uma modalidade de crédito que permite utilizar o saldo do Fundo de Garantia do Tempo de Serviço (FGTS) como garantia. É uma alternativa para quem precisa de dinheiro extra, oferecendo condições especiais e flexibilidade para o pagamento."
        buttonPrimaryText="Simule seu FGTS"
        imagePosition="right"
      />
      <FgtsSimulation />
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
      <BlogHighlights />
      <Faq
        items={FaqPersonalLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo Pessoal?"
      />
      <Footer />
    </div>
  );
}

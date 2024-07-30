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
import { FaqFgtsLoanItems } from "@/data";

export default function PersonalLoan() {
  const backgroundImageUrl = Images.duasPessoasConversando;

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
        image={Images.emprestimoFgts.src}
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
        alt="Imagem de Cartão de Crédito"
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de débito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        imagePosition="left"
      />
      <BlogHighlights />
      <Faq
        items={FaqFgtsLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo FGTS?"
      />
      <Footer />
    </div>
  );
}

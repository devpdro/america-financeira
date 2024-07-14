import {
  Header,
  Navbar,
  Faq,
  Footer,
  BlogInitial,
  HiringBenefits,
} from "@/presentation/components/Common";
import { Images } from "@/presentation/assets";
import CreditDetails from "@/presentation/components/Common/CreditDetails/credit-details";
import OurChannel from "@/presentation/components/Common/OurChannel/our-channel";
import { EligibilityInfo, LoanInfo } from "@/presentation/components";
import Decorative from "@/presentation/components/Common/Decorative/decorative";
import LoanBenefits from "@/presentation/components/Common/LoanBenefits/loan-benefits";

export default function PersonalLoan() {
  const backgroundImageUrl = Images.personalEntrepreneur;
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
        showDetails={
          <>
            Realize seus sonhos com a América Financeira e aproveite <br /> as
            menores taxas do mercado!
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <OurChannel />
      <LoanInfo
        title="O que é a antecipação FGTS?"
        subtitle="Saiba mais"
        paragraph="O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante."
      />
      <CreditDetails />
      <LoanBenefits />
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
      <Faq />
      <BlogInitial />
      <Footer />
    </div>
  );
}

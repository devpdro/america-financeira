import { Header, Navbar, Faq } from "@/presentation/components/Common";
import { Images } from "@/presentation/assets";

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
      <Faq />
    </div>
  );
}

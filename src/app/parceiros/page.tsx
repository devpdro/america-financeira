import {
  Footer,
  Header,
  PartnersBenefits,
  Navbar,
  Benefits,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";
import { PartnersApresentation } from "@/presentation/components";

export default function Partners() {
  const backgroundImageUrl = Images.payrollLoan;

  return (
    <>
      <Navbar />
      <Header
        title="Sobre a América Financeira"
        subtitle={
          <>
            Inovação e confiança <br /> para realizar seus sonhos <br />{" "}
            financeiros
          </>
        }
        showParagraph="*Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={
          <>
            Pioneiros em soluções financeiras que se adaptam às
            <br /> suas necessidades
          </>
        }
        backgroundImage={backgroundImageUrl.src}
      />
      <PartnersBenefits
        subtitle={
          <>
            Pioneiros em soluções financeiras que se adaptam às
            <br /> suas necessidades
          </>
        }
        title="America Partners"
      />
      <PartnersApresentation />
      <Benefits
        title={
          <>
            O crédito de qualidade <br /> que você merece
          </>
        }
        subtitle="Um empréstimo pode ser a solução financeira que você precisa para
          melhorar sua vida."
      />
      <PartnersBenefits
        subtitle={
          <>
            Pioneiros em soluções financeiras que se adaptam às
            <br /> suas necessidades
          </>
        }
        title="America Partners"
      />
      <Footer />
    </>
  );
}

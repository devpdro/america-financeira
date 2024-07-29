import {
  Footer,
  Header,
  PartnersBenefits,
  Navbar,
  Benefits,
  HeaderNotForm,
} from "@/presentation/components/common";
import { PartnersApresentation } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import { BenefitsPartnersItems } from "@/data";

export default function Partners() {
  const backgroundImageUrl = Images.cartaoDebito;

  return (
    <>
      <Navbar />
      <HeaderNotForm
        title="Sobre a América Financeira"
        subtitle={
          <>
            Inovação e confiança <br /> para realizar seus sonhos <br />{" "}
            financeiros
          </>
        }
        showParagraph="*Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={false}
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
        imageWidth={100}
        imageHeight={100}
        items={BenefitsPartnersItems}
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

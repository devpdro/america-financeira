import { Timeline, IntroductionAbout, Team } from "@/presentation/components";
import {
  Footer,
  HeaderNotForm,
  Navbar,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";

const AboutCompany = () => {
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
        showParagraph="Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <IntroductionAbout />
      <Timeline />
      <Team />
      <Footer />
    </>
  );
};

export default AboutCompany;

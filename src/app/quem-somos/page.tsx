import { Timeline, IntroductionAbout, Team } from "@/presentation/components";
import { Footer, Header, Navbar } from "@/presentation/components/common";
import { Images } from "@/presentation/assets";

const AboutCompany = () => {
  const backgroundImageUrl = Images.CellPhoneInsurance;

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
      <IntroductionAbout />
      <Timeline />
      <Team />
      <Footer />
    </>
  );
};

export default AboutCompany;

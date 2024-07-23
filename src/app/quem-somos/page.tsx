import { Images } from "@/presentation/assets";
import { AboutUs } from "@/presentation/components/about/about";
import { OurMission } from "@/presentation/components/about/our-misson";
import {
  BlogHighlights,
  Footer,
  Header,
  Navbar,
} from "@/presentation/components/common";

const AboutCompany = () => {
  const backgroundImageUrl = Images.QuemSomos;

  return (
    <>
      <Navbar />
      <Header
        title="Sobre a América Financeira"
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
      <AboutUs />
      <OurMission />
      <BlogHighlights />
      <Footer />
    </>
  );
};

export default AboutCompany;

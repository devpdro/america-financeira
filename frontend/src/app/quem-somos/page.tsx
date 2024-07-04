import { Header, Navbar } from "@/presentation/components/Common";
import { CarouselAbout } from "@/presentation/components/Carousel";
import { Images } from "@/presentation/assets";

const About = () => {
  const backgroundImageUrl = Images.HeaderInitial;
  return (
    <>
      <Navbar />
      <Header
        title="Olá, somos a América Financeira!"
        subtitle={
          <>
            Nosso propósito é fazer <br /> o seu dia a dia melhor
          </>
        }
        showDetails={
          <>
            Cada segundo do seu tempo merece ser valorizado. <br /> Por isso,
            trabalhamos para entregar a melhor experiência <br /> e os produtos
            certos para transformar a sua vida.
          </>
        }
        showLoanRequest={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <CarouselAbout
        subtitle="Cultura e valores"
        title={
          <>
            Escolha o empréstimo que <br /> mais combina com você
          </>
        }
      />
    </>
  );
};

export default About;

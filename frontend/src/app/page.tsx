import {
  Header,
  Navbar,
  Wrapper,
  Footer,
  CreditDetails,
} from "@/presentation/components/Common";
import { SatisfiedCustomers, Location, Banks } from "@/presentation/components";
import { CarouselLoan } from "@/presentation/components/Carousel";
import { Images } from "@/presentation/assets";

export default function Home() {
  const backgroundImageUrl = Images.HeaderInitial;
  return (
    <>
      <main>
        <Navbar />
        <Header
          title="Solicite seu crédito agora mesmo!"
          subtitle={
            <>
              Realizando sonhos <br /> através do Crédito!
            </>
          }
          showParagraph="*Aqui seu empréstimo é rápido, fácil e descomplicado"
          showDetails={false}
          backgroundImage={backgroundImageUrl.src}
        />
        <CarouselLoan
          subtitle="Ofertas personalizadas"
          title={
            <>
              Escolha o empréstimo que <br /> mais combina com você
            </>
          }
        />
        <CreditDetails />
        <Banks />
        <Location imageWidth={100} imageHeight={100} />
        <Wrapper
          image={Images.workWithUs.src}
          alt="Quem somos"
          title="Prazer, nós somos a América Financeira"
          subtitle="Uma unidade financeira com mais de 10 anos de experiência. Oferecemos soluções simples para facilitar sua vida financeira. Fácil quando você acessa, próximo quando você visita."
          buttonPrimaryText="Saiba Mais"
          imageWidth={98}
          imageHeight={98}
          imagePosition="left"
        />
        <Wrapper
          image={Images.workWithUs.src}
          alt="Trabalhe conosco"
          title="Vamos crescer juntos?"
          subtitle="Somos mais de mil pessoas que inovam e trabalham em conjunto pra gerar oportunidades de desenvolvimento a todos. Acesse nossa página de carreiras e veja as vagas abertas aqui na América Financeira. Vem curtir a jornada com a gente!"
          buttonPrimaryText="Quero fazer parte"
          imageWidth={98}
          imageHeight={98}
          imagePosition="right"
        />
        <SatisfiedCustomers />
        <Footer />
      </main>
    </>
  );
}

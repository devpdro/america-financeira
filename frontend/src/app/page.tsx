import {
  CarouselLoan,
  Header,
  Navbar,
  Wrapper,
  Footer,
  CreditDetails,
} from "@/presentation/components/Common";
import { SatisfiedCustomers, Location, Banks } from "@/presentation/components";
import { Images } from "@/presentation/assets";

export default function Home() {
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
          image={Images.payrollLoan.src}
          alt="Quem somos"
          title="Prazer, nós somos a América Financeira"
          subtitle="Uma unidade financeira com mais de 20 anos de experiência. Oferecemos soluções simples para facilitar sua vida financeira. Fácil quando você acessa, próximo quando você visita."
          buttonPrimaryText="Saiba Mais"
          imageWidth={100}
          imageHeight={100}
          imagePosition="left"
        />
        <Wrapper
          image={Images.payrollLoan.src}
          alt="Trabalhe conosco"
          title="Vamos crescer juntos?"
          subtitle="Somos mais de mil pessoas que inovam e trabalham em conjunto pra gerar oportunidades de desenvolvimento a todos. Acesse nossa página de carreiras e veja as vagas abertas aqui na América Financeira. Vem curtir a jornada com a gente!"
          buttonPrimaryText="Quero fazer parte"
          imageWidth={100}
          imageHeight={100}
          imagePosition="right"
        />
        <SatisfiedCustomers />
        <Footer />
      </main>
    </>
  );
}

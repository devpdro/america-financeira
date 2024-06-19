import {
  Navbar,
  Header,
  Carousel,
  Wrapper,
} from "@/presentation/components/Common";
import { Images } from "@/presentation/assets";
import { Banks } from "@/presentation/components/Banks";
import { Location } from "@/presentation/components/Location";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Wrapper
        image={Images.payrollLoan.src}
        alt="Empréstimo Consignado"
        title="Empréstimo Consignado"
        subtitle="Para aposentados e pensionistas do INSS, com desconto em folha, taxas reduzidas e até 84 vezes pra pagar. Contrate em poucos cliques, sem sair de casa!"
        buttonPrimaryText="Quero contratar agora"
        buttonSecondaryText="Saiba Mais"
        imageWidth={100}
        imageHeight={100}
        imagePosition="left"
      />
      <Wrapper
        image={Images.payrollLoan.src}
        alt="Empréstimo Pessoal"
        title="Empréstimo Pessoal"
        subtitle="Uma forma rápida e segura de você conseguir o dinheiro que precisa. Nosso processo é 100% online e nossas taxas são personalizadas para o seu perfil."
        buttonPrimaryText="Quero contratar agora"
        buttonSecondaryText="Saiba Mais"
        imageWidth={100}
        imageHeight={100}
        imagePosition="right"
      />
      <Banks />
      <Location />
      <Wrapper
        image={Images.payrollLoan.src}
        alt="Quem Somos"
        title="Prazer, nós somos a América Financeira"
        subtitle="Para aposentados e pensionistas do INSS, com desconto em folha, taxas reduzidas e até 84 vezes pra pagar. Contrate em poucos cliques, sem sair de casa!"
        buttonPrimaryText="Quero contratar agora"
        buttonSecondaryText="Saiba Mais"
        imageWidth={100}
        imageHeight={100}
        imagePosition="left"
      />
      <Wrapper
        image={Images.payrollLoan.src}
        alt="Vamos crescer juntos"
        title="Empréstimo Consignado"
        subtitle="Para aposentados e pensionistas do INSS, com desconto em folha, taxas reduzidas e até 84 vezes pra pagar. Contrate em poucos cliques, sem sair de casa!"
        buttonPrimaryText="Quero fazer parte"
        buttonSecondaryText="Saiba Mais"
        imageWidth={100}
        imageHeight={100}
        imagePosition="right"
      />
    </>
  );
};

export default HomePage;

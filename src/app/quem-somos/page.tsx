import Head from "next/head";

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
      <Head>
        <title>
          Conheça a América Financeira e sua Hístoria | América Financeira
        </title>
        <meta
          name="description"
          content="Conheça a América Financeira, uma empresa focada em inovação e confiança para realizar seus sonhos financeiros. Descubra nossa trajetória e conquistas ao longo dos anos."
        />
        <meta
          name="keywords"
          content="América Financeira, empresa financeira, inovação financeira, confiança financeira, trajetória, conquistas"
        />
        <meta
          property="og:title"
          content="Sobre a América Financeira - Inovação e Confiança"
        />
        <meta
          property="og:description"
          content="Conheça a América Financeira, uma empresa focada em inovação e confiança para realizar seus sonhos financeiros. Descubra nossa trajetória e conquistas ao longo dos anos."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:url" content="https://www.example.com/about" />
        <meta name="robots" content="index, follow" />
      </Head>
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

import { Images } from "@/presentation/assets";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <h1>Sobre a América Financeira</h1>
        <p>
          O Nu é a maior plataforma de banco digital do mundo fora da Ásia,
          atendendo a mais de 100 milhões de clientes no Brasil, México e
          Colômbia. A empresa tem liderado uma transformação na indústria,
          usando dados e tecnologia proprietária para desenvolver produtos e
          serviços inovadores. Guiado por sua missão de combater a complexidade
          e empoderar as pessoas, o Nu atende à jornada financeira completa dos
          clientes, promovendo acesso e avanço financeiro com crédito
          responsável e transparência. A empresa se apoia em um modelo de
          negócios eficiente e escalável que combina baixo custo de atendimento
          com retornos crescentes. O impacto do Nu tem sido reconhecido em
          diversos prêmios, incluindo as 100 Empresas mais Influentes da Time,
          as Empresas Mais Inovadoras da Fast Company e os Melhores Bancos do
          Mundo da Forbes.
        </p>
      </div>
      <div>
        <Image src={Images.AboutIlustration} alt="Sobre nós" />
      </div>
    </div>
  );
};

export default About;

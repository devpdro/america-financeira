# 💼 América Financeira

Este repositório é dedicado ao desenvolvimento do site da América Financeira. Nossa plataforma web oferece diversas soluções financeiras personalizadas para atender às necessidades dos nossos clientes. Aqui, você encontrará todas as informações necessárias para entender, configurar e contribuir com nosso projeto.

Explore nosso código-fonte e participe do desenvolvimento contínuo das ferramentas que impulsionam nossa plataforma financeira.

## 📖 Sumário

1. [Introdução](#introdução)
2. [Requisitos](#requisitos)
3. [Instalação](#instalação)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Como me localizar no projeto?](#como-me-localizar-no-projeto)

## 🚀 Introdução

### 🌐 Visão Geral

A América Financeira é uma empresa dedicada a oferecer uma ampla variedade de serviços financeiros para atender às necessidades de nossos clientes. Nosso site serve como um portal informativo e funcional, detalhando nossos serviços e facilitando o acesso a soluções financeiras práticas e eficazes. Com uma abordagem centrada no cliente, buscamos simplificar processos financeiros complexos e proporcionar suporte contínuo em diversas áreas.

### 💻 Tecnologias Utilizadas

#### Front-end

- **Next.js**: Framework React com renderização do lado do servidor (SSR) e geração de páginas estáticas, melhorando significativamente o SEO e a velocidade de carregamento das páginas. Facilita a configuração de rotas e a otimização automática de imagens, tornando o desenvolvimento mais eficiente.
- **SCSS**: Pré-processador CSS que torna a estilização mais rápida, eficiente e modular. Permite o uso de variáveis, mixins e aninhamento de seletores, facilitando a manutenção e a escalabilidade dos estilos.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a robustez do código e reduzindo erros durante o desenvolvimento. Torna o processo de codificação mais seguro e previsível.

#### Back-end

- **Node.js**: Ambiente de execução JavaScript server-side baseado no V8. Lida eficientemente com operações assíncronas de forma escalável, essencial para o desempenho e a confiabilidade do back-end. Permite construir APIs rápidas e escaláveis, fundamentais para a arquitetura de microserviços.

### 📦 Bibliotecas Utilizadas

- **@emotion/react**: Biblioteca para estilização em aplicações React, permitindo o uso de CSS-in-JS com desempenho otimizado.
- **@emotion/server**: Complemento do `@emotion/react` para renderização do lado do servidor (SSR) com suporte a CSS-in-JS.
- **@emotion/styled**: Biblioteca de estilização que fornece uma API similar ao `styled-components` para criar componentes com estilos encapsulados.
- **@formkit/auto-animate**: Biblioteca para adicionar animações automáticas a elementos DOM ao serem adicionados, removidos ou movidos.
- **@mantine/core**: Biblioteca de componentes UI para React com suporte para temas e acessibilidade.
- **@mantine/dates**: Conjunto de componentes de data e hora para o Mantine.
- **@mantine/hooks**: Conjunto de hooks utilitários para React, parte da biblioteca Mantine.
- **@mantine/next**: Ferramentas de integração entre Mantine e Next.js.
- **@tabler/icons-react**: Conjunto de ícones em SVG para React, parte da biblioteca Tabler Icons.
- **@tanstack/react-query**: Biblioteca para gerenciamento de estado de servidor e sincronização de dados em aplicações React.
- **@tanstack/react-query-devtools**: Ferramentas de desenvolvimento para `react-query`, ajudando a depurar e visualizar o estado dos dados.
- **axios**: Cliente HTTP baseado em promessas para fazer requisições HTTP.
- **cookies-next**: Biblioteca para manipulação de cookies em aplicações Next.js.
- **formik**: Biblioteca para gerenciamento de formulários em React.
- **js-cookie**: Biblioteca para manipulação de cookies em JavaScript.
- **next**: Framework React para renderização no lado do servidor e geração estática.
- **next-cookies**: Biblioteca para manipulação de cookies em aplicações Next.js (uma alternativa ao `cookies-next`).
- **next-images**: Plugin para importar imagens em projetos Next.js.
- **react**: Biblioteca principal para construção de interfaces de usuário.
- **react-alice-carousel**: Componente de carrossel para React.
- **react-dom**: Complemento do React para manipulação do DOM.
- **react-dropzone**: Componente para criação de áreas de drop (arrastar e soltar) de arquivos em React.
- **react-hook-form**: Biblioteca para gerenciamento de formulários em React, focada em desempenho.
- **react-icons**: Conjunto de ícones populares para React.
- **react-input-mask**: Componente para criação de máscaras de entrada em campos de formulário.
- **react-responsive-modal**: Componente para criação de modais responsivos em React.
- **sass**: Preprocessador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins.
- **styled-components**: Biblioteca para estilização em React utilizando tagged template literals.

## 📝 Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (v14 ou superior)
- npm (v6 ou superior)
- Git

## 🛠️ Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/america-financeira.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd america-financeira
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Para iniciar o servidor de desenvolvimento, execute:

   ```bash
   npm run dev
   ```

   O site estará disponível em [http://localhost:3000](http://localhost:3000).

   - Além disso, para preparar o site para produção e executá-lo, utilize:
     - `npm run build`: Cria uma versão otimizada do site para produção.
     - `npm start`: Inicia o servidor em modo de produção após a construção do site.
   - Certifique-se de ajustar as configurações necessárias no arquivo de configuração do projeto antes de iniciar o servidor em modo de produção.

## 📁 Estrutura do Projeto

### ./pages

Contém todas as páginas do projeto. O Next.js usa esta pasta para montar o sistema de roteamento. Cada arquivo dentro dessa pasta representa uma rota no aplicativo.

- **api**: Contém os endpoints da API.
- **blog**: Páginas relacionadas ao blog.
- **emprestimo-consignado**: Páginas relacionadas ao empréstimo consignado.
- **emprestimo-fgts**: Páginas relacionadas ao empréstimo FGTS.
- **emprestimo-pessoal**: Páginas relacionadas ao empréstimo pessoal.
- **login**: Página de login.
- **parceiros**: Página de parceiros.
- **politica-de-privacidade**: Página de política de privacidade.
- **quem-somos**: Página sobre a empresa.
- **termos-de-uso**: Página de termos de uso.
- **\_app.tsx**: Personaliza o comportamento global do aplicativo.
- **\_document.tsx**: Personaliza a estrutura do documento HTML.
- **\_error.tsx**: Página de erro personalizada.
- **index.tsx**: Página inicial.

### ./src

Pasta principal contendo todas as subpastas organizadas por funcionalidade.

- **data**: Contém dados estruturados, como modelos e configurações de UI.
  - **models**: Definições de modelos de dados usados no projeto.
  - **ui**: Configurações específicas de UI, como ícones, logotipos, etc.
- **infra**: Infraestrutura e configurações específicas do projeto.

- **main**: Lógica principal do projeto.

- **presentation**: Contém todos os componentes de apresentação.

  - **assets**: Recursos estáticos como imagens e ícones.
  - **components**: Componentes reutilizáveis de UI.
  - **hooks**: Hooks customizados para reutilização de lógica em componentes.
  - **pages**: Componentes específicos das páginas.
  - **styles**: Arquivos de estilo, como SCSS ou CSS.
  - **utils**: Funções utilitárias que são reutilizadas em diferentes partes do projeto.

- **tests**: Configurações e arquivos de teste para garantir a qualidade do código.
  - **.editorconfig**: Configurações do editor para manter a consistência de estilo de código.

### 🗺️ Como me localizar no projeto?

- **Páginas**: Todas as páginas do projeto estão específicas na pasta `./pages`.
- **Componentes**: Todos os componentes que representam as páginas estão na pasta `./src/presentation/pages`.
- **Componentes Reutilizáveis**: Componentes de interface de usuário reutilizáveis estão na pasta `./src/presentation/components/common`.
- **Estilos**: Arquivos de estilo e SCSS estão na pasta `./src/presentation/styles`.

Navegue pelas pastas e arquivos do projeto para localizar o código que deseja alterar ou estudar. Cada pasta é organizada de maneira a facilitar o entendimento e a manutenção do código.

---

Esta versão do `README.md` inclui a estrutura básica e clara para ajudar os desenvolvedores a entenderem o projeto e contribuírem para ele de maneira eficaz.

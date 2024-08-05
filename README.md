# 💼 América Financeira

Este repositório é dedicado ao desenvolvimento do site da América Financeira. Nossa plataforma web oferece diversas soluções financeiras personalizadas para atender às necessidades dos nossos clientes. Aqui, você encontrará todas as informações necessárias para entender, configurar e contribuir com nosso projeto.

Explore nosso código-fonte e participe do desenvolvimento contínuo das ferramentas que impulsionam nossa plataforma financeira.

## 📖 Sumário

> [!NOTE]
> 1.[Introdução](#1-introdução)

> [!IMPORTANT]
> 2.[Requisitos](#2-requisitos)

> [!IMPORTANT]
> 3.[Instalação](#3-instalação)

> [!IMPORTANT]
> 4.[Estrutura do Projeto](#6-arquitetura-do-projeto)

> [!NOTE]
> 5.[Testes](#11-testes)

> [!NOTE]
> 6.[Segurança](#12-segurança)

## 🚀 Introdução 

### 🌐 Visão Geral

A América Financeira é uma empresa dedicada a oferecer uma ampla variedade de serviços financeiros para atender às necessidades de nossos clientes. Nosso site serve como um portal informativo e funcional, detalhando nossos serviços e facilitando o acesso a soluções financeiras práticas e eficazes. Com uma abordagem centrada no cliente, buscamos simplificar processos financeiros complexos e proporcionar suporte contínuo em diversas áreas.

### 💻 Tecnologias Utilizadas

- Front-end
    - ```Next.js:``` Framework React com renderização do lado do servidor (SSR) e geração de páginas estáticas para melhorar o SEO e a velocidade de carregamento das páginas.
    - ```Storybook:``` Ferramenta utilizada para desenvolvimento e documentação de componentes de UI de forma isolada, facilitando a colaboração e o teste de componentes.
    - ```SCSS:``` Pré-processador CSS escolhido por sua capacidade de tornar a estilização mais rápida, eficiente e modular.
    - ```TypeScript:``` Utilizado para adicionar tipagem estática ao JavaScript, melhorando a robustez do código e reduzindo erros durante o desenvolvimento.

- Back-end
    - ```Node.js:``` Ambiente de execução JavaScript server-side baseado no V8, escolhido por sua eficiência e capacidade de lidar com operações assíncronas de forma escalável.
    - ```Express:``` Framework web minimalista para Node.js, utilizado para construir APIs de forma simples e eficaz, facilitando o desenvolvimento de serviços web.

- Banco de Dados
    - ```MySQL:``` Sistema de gerenciamento de banco de dados relacional escolhido pela sua confiabilidade, ampla adoção e capacidade de suportar consultas complexas.

- Testes
    - ```Jest:``` Framework de testes de JavaScript selecionado pela sua simplicidade, eficiência e suporte robusto para testes unitários e de integração.

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
    O site estará disponível em http://localhost:3000.

    - Além disso, para preparar o site para produção e executá-lo, utilize:
        - npm run build: Cria uma versão otimizada do site para produção.
        - npm start: Inicia o servidor em modo de produção após a construção do site.
    - Certifique-se de ajustar as configurações necessárias no arquivo de configuração do projeto antes de iniciar o servidor em modo de produção.
   
## 📁 Estrutura do projeto

Estrutura do projeto
./pages: É uma página que o Next.js usa para montar o sistema de roteamento
./src/components: São todos os pedaços primordiais de interface como componentes de formulário, <Text>(para qualquer texto) e o<Box>
<Text>: Uma das ideias por trás do texto é tematizar melhor o projeto no futuro e ele servir como um adaptador para qualquer padronização de design que possamos vir a ter.
<Box>: É nossa abstração para criar estilos, sempre use uma caixa e nunca crie um componente estilizado diretamente no projeto .
Ele recebe uma prop chamada e styleSheeta mesma pode receber ou uma chave com nome de propriedade do CSS com seu valor, ou ao invés do valor você pode passar um objeto com a resolução que a propriedade deve ser aplicada.
Exemplo :
<Box styleSheet={{ color: 'red' }} />você <Box styleSheet={{ color: { xs: 'red', md: 'blue' } }} />;
./src/patterns: Os padrões são todos os pedaços de interface que são menos genéricos que os componentes mas são reutilizados em mais de 3 lugares do projeto e fazem parte da estrutura geral dele
./src/screens: Toda tela representa uma tela do projeto, uma tela caso tenha componentes específicos especificamente deve ter os mesmos salvos em sua própria pasta, repetindo a estrutura anterior do projeto e evitando o reuso antes do uso de fato.
Como me localizar no projeto?
Todas as páginas do projeto estão específicas em./pages
Todos os componentesque representam as páginas estão em./src/screens
Uma vez dentro de uma página você pode navegar pelos componentes para se encontrar e fazer a alteração que deseja

## 5. Testes
Para rodar os testes, execute o seguinte comando:

bash
Copiar código
npm test
Estrutura dos Testes
Unitários: Localizados na pasta tests/unit.
Integração: Localizados na pasta tests/integration.
Ferramentas de Teste
Utilizamos Jest e Enzyme para nossos testes.

## 6. Segurança
Considerações de Segurança
Autenticação: Utilizamos JWT para autenticação.
Armazenamento de Senhas: As senhas são armazenadas usando bcrypt.
Comunicação Segura: Todas as comunicações são feitas via HTTPS.
Relatar Vulnerabilidades
Se você encontrar uma vulnerabilidade de segurança, por favor, reporte-a imediatamente para segurança@americafinanceira.com.

Esta versão do README.md inclui a estrutura básica e clara para ajudar os desenvolvedores a entenderem o projeto e contribuírem para ele de maneira eficaz.

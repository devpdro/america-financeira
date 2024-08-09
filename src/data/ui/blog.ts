import { StaticImageData } from 'next/image'
import { Images } from '@/presentation/assets'

export type BlogPostItem = {
  id: number
  routes: string
  title: string
  subtitle: string
  date: string
  image: StaticImageData
  paragraphOne: string
  titleContentOne: string
  paragraphTwo: string
  titleContentTwo: string
  titleListOne: string
  listOne: string
  titleListTwo: string
  listTwo: string
  titleListThree: string
  listThree: string
  titleListFour: string
  listFour: string
  titleListFive: string
  listFive: string
  titleSecond: string
  titleListSix: string
  listSix: string
  titleListSeven: string
  listSeven: string
  titleListEight: string
  listEight: string
  titleConclusion: string
  paragraphThree: string
  paragraphFour: string
}

export const blogArticle: BlogPostItem[] = [
  {
    id: 1,
    routes: 'pagar-boleto-com-cartao-de-credito-e-possivel',
    subtitle: 'Cartão de Crédito',
    title: 'Pagar boleto com cartão de crédito é possível?',
    date: 'Criado em 21 de janeiro de 2024',
    image: Images.cartaoDebito,
    paragraphOne:
      'Pagar boletos com cartão de crédito pode ser uma alternativa conveniente, especialmente em momentos de emergência. Saiba como funciona e se vale a pena.',
    titleContentOne: 'Como funciona o pagamento de boletos com cartão?',
    paragraphTwo:
      'O pagamento de boletos com cartão de crédito é feito através de aplicativos de bancos ou fintechs que oferecem esse serviço. É simples e prático. Após o pagamento, o valor é adicionado à fatura do cartão de crédito, que deve ser paga na data de vencimento.',
    titleContentTwo: 'Vantagens e desvantagens',
    titleListOne: 'Vantagens:',
    listOne:
      ' Pode ajudar a organizar suas finanças em situações emergenciais. Utilizar o cartão de crédito para pagar boletos permite postergar o débito e organizar melhor suas finanças.',
    titleListTwo: 'Desvantagens:',
    listTwo:
      ' Taxas de juros podem ser altas. Avalie se realmente é necessário. O uso frequente pode levar a uma dívida crescente se não houver planejamento adequado.',
    titleListThree: 'Praticidade:',
    listThree:
      ' O processo é simples e rápido, realizado através de aplicativos. No entanto, é importante estar atento às taxas cobradas pelo serviço, que podem variar entre diferentes instituições.',
    titleListFour: 'Riscos:',
    listFour:
      ' Pode levar ao endividamento se não houver controle financeiro adequado. A facilidade de pagamento pode levar a gastos desnecessários e descontrole financeiro.',
    titleListFive: 'Conveniência:',
    listFive:
      ' Permite pagar boletos mesmo quando não há saldo disponível na conta corrente, oferecendo uma solução em situações emergenciais.',
    titleSecond: 'Cuidados ao Utilizar',
    titleListSix: 'Controle os gastos:',
    listSix:
      ' Mantenha um controle rígido dos seus gastos no cartão de crédito para evitar surpresas na fatura. Utilize aplicativos de gestão financeira para monitorar suas despesas.',
    titleListSeven: 'Pague a fatura integralmente:',
    listSeven:
      ' Evite o pagamento mínimo para não acumular juros altos. Pagar a fatura integralmente evita o acúmulo de dívidas e juros compostos.',
    titleListEight: 'Avalie a necessidade:',
    listEight:
      ' Utilize essa modalidade apenas quando realmente necessário. Evite transformar o pagamento de boletos com cartão de crédito em um hábito frequente.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'Pagar boletos com cartão de crédito pode ser uma solução em momentos de necessidade, mas é importante considerar as taxas envolvidas para não se endividar. Planeje-se e use essa opção de forma consciente.',
    paragraphFour:
      'Antes de utilizar esta modalidade, verifique as condições e as taxas aplicáveis com a sua instituição financeira. Avalie se é a melhor opção para o seu caso e utilize-a com moderação para evitar surpresas na fatura.',
  },
  {
    id: 2,
    routes: 'como-investir-no-tesouro-direto-guia-completo',
    subtitle: 'Investimentos',
    title: 'Como investir no Tesouro Direto: Guia completo',
    date: 'Criado em 15 de março de 2024',
    image: Images.TesouroDireto,
    paragraphOne:
      'Investir no Tesouro Direto é uma das formas mais seguras e acessíveis de aplicar seu dinheiro. Vamos entender como funciona e quais são as opções disponíveis.',
    titleContentOne: 'O que é o Tesouro Direto?',
    paragraphTwo:
      'O Tesouro Direto é um programa do governo federal que permite a compra de títulos públicos por pessoas físicas, de forma simples e segura. Existem diferentes tipos de títulos, como Tesouro Selic, Tesouro IPCA e Tesouro Prefixado, cada um com características específicas.',
    titleContentTwo: 'Vantagens do Tesouro Direto',
    titleListOne: 'Baixo risco:',
    listOne: ' Investimento garantido pelo governo federal, considerado o investimento mais seguro do país.',
    titleListTwo: 'Acessibilidade:',
    listTwo: ' Aplicações a partir de valores baixos, permitindo que qualquer pessoa comece a investir.',
    titleListThree: 'Diversidade de opções:',
    listThree:
      ' Vários tipos de títulos, com diferentes prazos e indexadores, permitindo a diversificação da carteira.',
    titleListFour: 'Facilidade de acesso:',
    listFour:
      ' Pode ser feito online, sem necessidade de intermediários. Todo o processo é realizado pela internet, de forma simples e prática.',
    titleListFive: 'Rentabilidade:',
    listFive:
      ' Oferece bons retornos comparados a outros investimentos de baixo risco, com opções atreladas à inflação que protegem o poder de compra.',
    titleSecond: 'Como Investir no Tesouro Direto',
    titleListSix: 'Abra uma conta em uma corretora:',
    listSix:
      ' Escolha uma corretora de valores e abra sua conta. Muitas corretoras oferecem isenção de taxa de administração para investimentos no Tesouro Direto.',
    titleListSeven: 'Transfira os recursos:',
    listSeven:
      ' Envie o dinheiro para a sua conta na corretora. Certifique-se de que os recursos estão disponíveis para investimento.',
    titleListEight: 'Escolha os títulos:',
    listEight:
      ' Selecione os títulos do Tesouro Direto que mais se adequam aos seus objetivos. Utilize simuladores para entender o retorno esperado de cada título.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'O Tesouro Direto é uma excelente opção para investidores que buscam segurança e rentabilidade. Explore as opções disponíveis e comece a investir hoje mesmo.',
    paragraphFour:
      'Para iniciar seus investimentos, basta abrir uma conta em uma corretora de valores, transferir os recursos e selecionar os títulos do Tesouro Direto que melhor atendem às suas necessidades. Lembre-se de acompanhar regularmente seus investimentos e ajustar sua estratégia conforme necessário.',
  },
  {
    id: 3,
    routes: 'cdb-tudo-o-que-voce-precisa-saber-sobre-e-como-investir',
    subtitle: 'Investimentos',
    title: 'CDB: Tudo o que você precisa saber sobre e como investir!',
    date: 'Criado em 21 de julho de 2024',
    image: Images.pessoaCelular,
    paragraphOne:
      'Certificados de Depósito Bancário (CDB) são uma opção de investimento segura e rentável. Entenda como funcionam e como investir.',
    titleContentOne: 'O que é CDB?',
    paragraphTwo:
      'CDB é um título de renda fixa emitido pelos bancos para captar recursos. Em troca, o investidor recebe uma remuneração. Existem diferentes tipos de CDB, incluindo pré-fixados, pós-fixados e atrelados à inflação, cada um com suas próprias características.',
    titleContentTwo: 'Vantagens de investir em CDB',
    titleListOne: 'Segurança:',
    listOne:
      ' Protegido pelo Fundo Garantidor de Créditos (FGC) até um certo valor. Isso significa que, em caso de problemas com a instituição financeira, você está protegido até o limite garantido.',
    titleListTwo: 'Rentabilidade:',
    listTwo:
      ' Pode oferecer rendimentos superiores à poupança. A rentabilidade pode ser pré-fixada, pós-fixada ou atrelada à inflação, proporcionando diferentes níveis de retorno conforme o perfil do investidor.',
    titleListThree: 'Liquidez:',
    listThree:
      ' Opções de CDB com liquidez diária estão disponíveis. Isso permite que você resgate seu dinheiro a qualquer momento, sem perder a rentabilidade acumulada.',
    titleListFour: 'Diversificação:',
    listFour:
      ' Permite diversificar seus investimentos com diferentes prazos e indexadores, ajustando o portfólio conforme suas necessidades e objetivos financeiros.',
    titleListFive: 'Baixo risco:',
    listFive:
      ' Por ser garantido pelo governo, o risco é muito baixo comparado a outros investimentos. Além disso, o FGC oferece uma camada extra de proteção.',
    titleSecond: 'Como Investir em CDB',
    titleListSix: 'Escolha uma corretora:',
    listSix:
      ' Abra uma conta em uma corretora de valores que ofereça CDBs. Certifique-se de escolher uma corretora confiável e com boas avaliações.',
    titleListSeven: 'Pesquise os títulos:',
    listSeven:
      ' Verifique os CDBs disponíveis e compare as taxas de retorno, prazos e outras condições. Utilize simuladores para entender o potencial de retorno.',
    titleListEight: 'Faça a aplicação:',
    listEight:
      ' Selecione o CDB desejado e invista o valor disponível. Monitore seu investimento regularmente e faça ajustes conforme necessário.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'Investir em CDB pode ser uma excelente maneira de obter uma renda fixa segura e com boa rentabilidade. Pesquise as opções disponíveis e escolha a que melhor se adapta ao seu perfil de investidor.',
    paragraphFour:
      'Antes de investir, é importante entender as condições do CDB, como prazos, taxas e a forma de rendimento. Consulte seu banco ou corretora para obter mais informações e faça uma escolha consciente. Diversifique seus investimentos para otimizar seus retornos e reduzir riscos.',
  },
  {
    id: 4,
    routes: 'como-economizar-no-dia-a-dia-dicas-praticas',
    subtitle: 'Economia',
    title: 'Como economizar no dia a dia: Dicas práticas',
    date: 'Criado em 20 de abril de 2024',
    image: Images.pessoaSozinha,
    paragraphOne:
      'Economizar no dia a dia pode parecer difícil, mas com algumas mudanças de hábitos é possível guardar um bom dinheiro. Veja nossas dicas práticas.',
    titleContentOne: 'Planeje suas compras',
    paragraphTwo:
      'Fazer um planejamento das compras semanais ou mensais pode ajudar a evitar gastos desnecessários. Elabore uma lista de compras antes de ir ao supermercado e siga-a rigorosamente para evitar compras por impulso.',
    titleContentTwo: 'Evite desperdícios',
    titleListOne: 'Reutilize e recicle:',
    listOne:
      ' Dê uma nova utilidade para objetos e evite o desperdício. Recicle materiais como papel, plástico e vidro, contribuindo para a sustentabilidade e economizando dinheiro.',
    titleListTwo: 'Corte gastos supérfluos:',
    listTwo:
      ' Avalie seus gastos e elimine aqueles que não são essenciais. Analise suas despesas mensais e identifique áreas onde é possível economizar.',
    titleListThree: 'Use transporte público:',
    listThree:
      ' Sempre que possível, opte por transporte público para economizar em combustível e estacionamento. Caronas compartilhadas também são uma boa alternativa para economizar e reduzir a pegada de carbono.',
    titleListFour: 'Compre no atacado:',
    listFour:
      ' Comprar produtos em maiores quantidades pode resultar em boas economias. Itens como produtos de limpeza e alimentos não perecíveis são ideais para compras em atacado.',
    titleListFive: 'Evite compras impulsivas:',
    listFive:
      ' Pense bem antes de fazer uma compra e veja se ela realmente é necessária. Pergunte-se se o item é essencial e se você pode viver sem ele.',
    titleSecond: 'Dicas de Economia Doméstica',
    titleListSix: 'Reduza o consumo de energia:',
    listSix:
      ' Desligue aparelhos que não estão em uso e opte por lâmpadas econômicas. Utilize eletrodomésticos de baixo consumo energético e aproveite a luz natural sempre que possível.',
    titleListSeven: 'Economize água:',
    listSeven:
      ' Conserte vazamentos e evite desperdícios durante o banho e a lavagem de louças. Utilize redutores de fluxo nas torneiras e aproveite a água da chuva para regar plantas.',
    titleListEight: 'Planeje refeições:',
    listEight:
      ' Fazer um cardápio semanal pode evitar desperdícios de alimentos. Cozinhe em grandes quantidades e congele porções individuais para consumo posterior.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'Pequenas mudanças de hábitos podem fazer uma grande diferença na economia do dia a dia. Comece a economizar hoje mesmo com nossas dicas.',
    paragraphFour:
      'Lembre-se de monitorar seus gastos regularmente e ajustar seu planejamento conforme necessário para manter suas finanças sob controle. A economia de hoje pode significar um futuro financeiro mais estável e seguro.',
  },
  {
    id: 5,
    routes: 'cartao-de-credito-dicas-para-usar-de-forma-saudavel',
    subtitle: 'Finanças Pessoais',
    title: 'Cartão de Crédito: Dicas para usar de forma saudável',
    date: 'Criado em 15 de abril de 2024',
    image: Images.PessoaDicas,
    paragraphOne:
      'O cartão de crédito pode ser um ótimo aliado nas finanças pessoais, mas é importante saber usá-lo corretamente para evitar dívidas. Confira nossas dicas.',
    titleContentOne: 'Controle seus gastos',
    paragraphTwo:
      'Mantenha um controle rígido dos seus gastos no cartão de crédito para evitar surpresas na fatura. Utilize aplicativos de gestão financeira para acompanhar suas despesas em tempo real.',
    titleContentTwo: 'Pague a fatura integralmente',
    titleListOne: 'Evite o pagamento mínimo:',
    listOne:
      ' O pagamento mínimo pode gerar juros altos e se transformar em uma bola de neve, aumentando significativamente sua dívida ao longo do tempo.',
    titleListTwo: 'Planeje seus pagamentos:',
    listTwo:
      ' Tenha um planejamento financeiro para pagar a fatura integralmente todos os meses. Inclua as despesas do cartão de crédito no seu orçamento mensal.',
    titleListThree: 'Aproveite os benefícios:',
    listThree:
      ' Utilize os programas de pontos e milhas oferecidos pelo cartão de crédito. Estes benefícios podem ser trocados por produtos, passagens aéreas e outros serviços.',
    titleListFour: 'Verifique as taxas:',
    listFour:
      ' Fique atento às taxas de anuidade e outros custos associados ao cartão. Negocie com o banco para obter isenção ou redução dessas taxas.',
    titleListFive: 'Mantenha o controle:',
    listFive:
      ' Use aplicativos de controle financeiro para monitorar suas despesas e evitar gastar mais do que pode pagar.',
    titleSecond: 'Dicas para um Uso Consciente',
    titleListSix: 'Estabeleça um limite de gastos:',
    listSix:
      ' Defina um limite de gastos mensais para evitar surpresas e mantenha-se dentro desse limite para garantir que você pode pagar a fatura integralmente.',
    titleListSeven: 'Não empreste seu cartão:',
    listSeven:
      ' Evite emprestar seu cartão de crédito para outras pessoas. Você é responsável por todas as despesas feitas com o seu cartão.',
    titleListEight: 'Faça compras planejadas:',
    listEight:
      ' Evite compras impulsivas e planeje suas aquisições com antecedência. Pesquise preços e condições de pagamento antes de realizar uma compra.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'Usar o cartão de crédito de forma consciente pode trazer muitos benefícios. Siga nossas dicas e mantenha suas finanças saudáveis.',
    paragraphFour:
      'Além disso, aproveite os benefícios e recompensas oferecidos pelos cartões de crédito, mas sempre com responsabilidade e dentro do seu orçamento. Planeje suas despesas e evite dívidas desnecessárias.',
  },
  {
    id: 6,
    routes: 'como-fazer-uma-simulacao-para-emprestimo-fgts',
    subtitle: 'Empréstimos',
    title: 'Como fazer uma simulação para empréstimo FGTS',
    date: 'Criado em 11 de março de 2024',
    image: Images.pessoaComCelular,
    paragraphOne:
      'Empréstimos podem ser a solução financeira para diversas situações, desde pagar dívidas até realizar grandes sonhos. Vamos explorar os diferentes tipos de empréstimos e suas principais características.',
    titleContentOne: 'Tipos de Empréstimos',
    paragraphTwo:
      'Existem vários tipos de empréstimos disponíveis, cada um com suas especificidades. Entre eles estão:',
    titleContentTwo: 'Como escolher o empréstimo ideal',
    titleListOne: 'Empréstimo pessoal:',
    listOne:
      ' Uma opção flexível que pode ser usada para diversos fins, como consolidar dívidas ou fazer uma grande compra. Normalmente tem taxas de juros mais altas devido à falta de garantias.',
    titleListTwo: 'Empréstimo consignado:',
    listTwo:
      ' Oferecido a aposentados, pensionistas e funcionários públicos, com parcelas descontadas diretamente da folha de pagamento. As taxas de juros são geralmente mais baixas devido à garantia do pagamento.',
    titleListThree: 'Empréstimo empresarial:',
    listThree:
      ' Destinado a empresas que precisam de capital para expandir ou manter operações. Pode ser utilizado para compra de equipamentos, estoque ou como capital de giro.',
    titleListFour: 'Empréstimo com garantia:',
    listFour:
      ' Inclui opções como empréstimo com garantia de imóvel ou veículo, onde o bem é utilizado como garantia para obter melhores condições de juros.',
    titleListFive: 'Empréstimo estudantil:',
    listFive:
      ' Projetado para ajudar estudantes a pagar pela educação superior, com condições de pagamento que começam após a conclusão do curso.',
    titleSecond: 'Fatores a Considerar',
    titleListSix: 'Taxas de juros:',
    listSix:
      ' Compare as taxas oferecidas por diferentes instituições financeiras. Uma pequena diferença pode resultar em uma economia significativa ao longo do tempo.',
    titleListSeven: 'Prazo de pagamento:',
    listSeven:
      ' Prazos mais longos resultam em parcelas menores, mas aumentam o custo total do empréstimo. Escolha um prazo que se ajuste ao seu orçamento.',
    titleListEight: 'Condições de pagamento:',
    listEight:
      ' Verifique se a instituição permite renegociar a dívida em caso de dificuldades financeiras e se há flexibilidade nas datas de pagamento.',
    titleConclusion: 'Conclusão:',
    paragraphThree:
      'Escolher o empréstimo certo pode ajudar você a alcançar seus objetivos financeiros de maneira eficiente. Sempre pesquise bem e escolha a opção que melhor se adapta às suas necessidades. Considere todos os fatores mencionados e faça uma simulação para ter uma visão clara do seu compromisso financeiro.',
    paragraphFour:
      'Uma simulação de empréstimo é uma ferramenta útil para entender os custos envolvidos e as condições de pagamento. Utilize simuladores online e consulte especialistas financeiros para tomar a melhor decisão.',
  },
]

export default {
    welcome: 'Bem-vindo ao CV Terminal v1.0.0',
    welcomeHint: 'Digite /help para listar comandos. Use /language [en|pt] para trocar idioma.',
    separator: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
    cmdNotFound: 'comando não encontrado: {cmd}\nDigite /help para listar comandos disponíveis.',
    helpTitle: 'Comandos disponíveis:',
    helpBody: [
        '/aboutme           \u2014  Quem sou eu',
        '/xp                \u2014  Lista de empresas',
        '/xp <index>        \u2014  Detalhes da empresa',
        '/formacao          \u2014  Lista de formações',
        '/formacao <index>  \u2014  Detalhes da formação',
        '/skills            \u2014  Minhas habilidades',
        '/complete          \u2014  Mostra tudo de uma vez',
        '/export [en|pt]    \u2014  Exportar CV como PDF',
        '/language [en|pt]  \u2014  Trocar idioma',
        '/clear             \u2014  Limpa o terminal',
        '/help              \u2014  Esta mensagem',
        '',
        'Dica: use Tab para auto-completar.'
    ].join('\n'),
    aboutme: [
        '\uD83D\uDC4B Olá! Eu sou o Luiz Nascimento (ou Guto, como preferir).',
        '',
        'Sou desenvolvedor full stack com 10+ anos de experiência criando aplicações web escaláveis e performáticas.',
        'Tenho bacharelado em Ciência da Computação pela Universidade Estadual do Mato Grosso do Sul (UEMS) e com diploma reconhecido',
        'pela Universidade da Beira Interior.',
        'Antes de mem mudar para Portugal eu construí minha carreira começando com Analista de testes, manuais e automatizados, passando por',
        'grandes empresas com Telefônica e Hewlett Packard Enterprise. Como Desenvolvedor Full Stack com foco em java trabalhei por 6 anos na',
        'Companhia de Tecnologia do Paraná (Celepar).',
        '',
        '\uD83D\uDD39 Foco: Vue.js, Java, Spring Boot, Hibernate',
        '\uD83D\uDD39 Interesses: Golang, IA, open source',
        '\uD83D\uDD39 Atualmente: Capgemini como Dev Backend Sênior',
        '',
        '\uD83D\uDCE7 luiz.v.nasc@protomail.com',
        '\uD83D\uDD17 linkedin.com/in/luizvnasc'
    ].join('\n'),
    skillNative: 'Nativo',
    skillBasic: 'Básico',
    skillIntermediate: 'Intermediário',
    skillAdvanced: 'Avançado',
    skillTechnical: 'Habilidades Técnicas',
    skillLanguage: 'Idiomas',
    xpHint: 'Use /xp [índice] para ver detalhes.',
    xpDetailInvalid: 'erro: índice inválido. Use /xp para listar as experiências (1-{max}).',
    formacaoHint: 'Use /education [índice] para ver detalhes.',
    formacaoDetailInvalid: 'erro: índice inválido. Use /formacao para listar as formações (1-{max}).',
    completeAbout: 'Sobre Mim',
    completeXp: 'Experiência',
    completeFormacao: 'Formação',
    completeSkills: 'Habilidades',
    languageChanged: 'Idioma alterado para Português.',
    languageInvalid: 'Idiomas suportados: en, pt',
    exportDone: 'PDF exportado com sucesso!',

    cmds: ['/aboutme', '/xp', '/education', '/skills', '/complete', '/language', '/help', '/clear', '/export'],

    technicalSkills: [
        { name: 'Java', value: 100, labelKey: 'skillAdvanced' },
        { name: 'Spring', value: 100, labelKey: 'skillAdvanced' },
        { name: 'Quarkus', value: 100, labelKey: 'skillAdvanced' },
        { name: 'Jakarta EE', value: 100, labelKey: 'skillAdvanced' },
        { name: 'Vue.js', value: 100, labelKey: 'skillAdvanced' },
        { name: 'Kafka', value: 66, labelKey: 'skillIntermediate' },
        { name: 'RabbitMQ', value: 66, labelKey: 'skillIntermediate' },
        { name: 'Docker', value: 66, labelKey: 'skillIntermediate' },
        { name: 'Mysql', value: 66, labelKey: 'skillIntermediate' },
        { name: 'Oracle', value: 66, labelKey: 'skillIntermediate' },
        { name: 'MongoDB', value: 66, labelKey: 'skillIntermediate' },
        { name: 'Redis', value: 33, labelKey: 'skillIntermediate' },
        { name: 'AWS', value: 33, labelKey: 'skillBasic' },
        { name: 'GraphDB', value: 33, labelKey: 'skillBasic' },
        { name: 'GraphQL', value: 33, labelKey: 'skillBasic' }
    ],

    languages: [
        { name: 'Portugu\u00eas', value: 100, labelKey: 'skillNative' },
        { name: 'English', value: 66, labelKey: 'skillAdvanced' }
    ],

    experiences: [
        {
            company: 'Open Cascade, part of Capgemini',
            period: 'Mai 2023 \u2014 Presente',
            role: 'Software Engineer',
            description: 'Engenharia de software na Open Cascade, parte da Capgemini. Trabalhando com Java, Apache Kafka e arquitetura de microsserviços. Porto, Portugal.',
            techs: ['Java', 'Apache Kafka','Spring','Mysql','Rabbitmq','AWS']
        },
        {
            company: 'Celepar',
            period: 'Nov 2016 \u2014 Abr 2023',
            role: 'Analista de Desenvolvimento',
            description: 'Suporte aos sistemas da Secretaria da Fazenda. Arquitetura de novos projetos. Prospecção de tecnologias.',
            techs: ['Java', 'Quarkus','Jakarta EE','Oracle','Vue.js','Openshift']
        },
        {
            company: 'Growyx',
            period: 'Ago 2021 \u2014 Fev 2022',
            role: 'Desenvolvedor Golang (Freelance)',
            description: 'Desenvolvimento de microsserviço para consumo de API de terceiros utilizando Golang.',
            techs: ['PostgreSQL', 'gRPC','Golang','MongoDB','Graphql']
        },
        {
            company: 'Pelissari Gestão e Tecnologia',
            period: 'Fev 2016 \u2014 Nov 2016',
            role: 'Consultor de Desenvolvimento ABAP Jr.',
            description: 'Desenvolvimento do projeto interno "Simples Assim". Desenvolvimento de produtos utilizando SAPUI5 e SAP Gateway. Pequenas melhorias em ferramentas internas de alocação.',
            techs: ['SAPUI5', 'C#']
        },
        {
            company: 'Hewlett Packard Enterprise',
            period: 'Jul 2015 \u2014 Fev 2016',
            role: 'Analista de Testes',
            description: 'Execução de testes de COT e Regressão. Auxílio a demais projetos. Escrita e manutenção de scripts para testes automatizados. Iniciativa de padronização dos scripts para MVC com paradigmas de POO.',
            techs: ['HP Quality Center', 'VBScript']
        },
        {
            company: 'IntellyIT',
            period: 'Jan 2015 \u2014 Jul 2015',
            role: 'Analista de Testes Automatizados Jr.',
            description: 'Alocado na GVT. Execução de testes de COT e Regressão. Escrita e manutenção de scripts para testes automatizados. Iniciativa de padronização dos scripts para MVC com paradigmas de POO.',
            techs: ['HP Quality Center', 'VBScript', 'SQL']
        },
        {
            company: 'IntellyIT',
            period: 'Jul 2014 \u2014 Jan 2015',
            role: 'Analista de Teste Jr.',
            description: 'Alocado na GVT. Escrita e execução de casos de teste para pequenos desenvolvimentos e requisições de mudança. Revisão de testes. Auxílio as demais equipes. Padronização dos casos de teste. Iniciativa para adoção de modularização e parametrização para maior reutilização dos casos de teste manuais.',
            techs: ['HP Quality Center', 'WebServices', 'PL/SQL']
        }
    ],

    formations: [
        {
            institution: 'Universidade da Beira Interior',
            degree: 'Licenciatura, Engenharia da Informática',
            period: 'Fev 2025',
            description: 'Reconhecimento de diploma em Portugal para equivalência de título internacional.',
            techs: []
        },
        {
            institution: 'Universidade Positivo',
            degree: 'Pós Graduação, Java',
            period: '2017 \u2014 2018',
            description: 'Pós Graduação em desenvolvimento Java.',
            techs: ['Java']
        },
        {
            institution: 'Universidade Estadual de Mato Grosso do Sul (UEMS)',
            degree: 'Bacharel, Ciência da Computação',
            period: '2007 \u2014 2011',
            description: 'Bacharelado em Ciência da Computação. Atividades: Centro Acadêmico do curso de Ciência da Computação como secretário e posteriormente como presidente.',
            techs: ['Ciência da Computação']
        }
    ]
}

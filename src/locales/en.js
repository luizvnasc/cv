export default {
    welcome: 'Welcome to CV Terminal v1.0.0',
    welcomeHint: 'Type /help to list available commands. Use /language [en|pt] to switch languages.',
    separator: '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
    cmdNotFound: 'command not found: {cmd}\nType /help to list available commands.',
    helpTitle: 'Available commands:',
    helpBody: [
        '/aboutme           \u2014  About me',
        '/xp                \u2014  Work experience list',
        '/xp <index>        \u2014  Work experience details',
        '/education          \u2014  Education list',
        '/education <index>  \u2014  Education details',
        '/skills            \u2014  My skills',
        '/complete          \u2014  Show everything at once',
        '/export [en|pt]    \u2014  Export CV as PDF',
        '/language [en|pt]  \u2014  Switch language',
        '/clear             \u2014  Clear terminal',
        '/help              \u2014  This message',
        '',
        'Tip: use Tab for auto-complete.'
    ].join('\n'),
    aboutme: [
        '\uD83D\uDC4B Hi! I\'m Luiz Nascimento (or Guto, as you prefer).',
        '',
        'Full stack developer with 10+ years of experience building scalable and performant web applications.',
        'I hold a Bachelor\'s degree in Computer Science from Universidade Estadual do Mato Grosso do Sul (UEMS),',
        'with my diploma recognized by Universidade da Beira Interior in Portugal.',
        'I started my career as a Test Analyst, working with manual and automated testing',
        'at companies like Telef\u00f4nica and Hewlett Packard Enterprise.',
        'Later, I transitioned to Full Stack development with a focus on Java,',
        'working for 6 years at Companhia de Tecnologia do Paran\u00e1 (Celepar).',
        '',
        '\uD83D\uDD39 Focus: Vue.js, Java, Spring Boot, Hibernate',
        '\uD83D\uDD39 Interests: Golang, AI, open source',
        '\uD83D\uDD39 Currently: Capgemini as Senior Backend Developer',
        '',
        '\uD83D\uDCE7 luiz.v.nasc@protomail.com',
        '\uD83D\uDD17 linkedin.com/in/luizvnasc'
    ].join('\n'),
    skillNative: 'Native',
    skillBasic: 'Basic',
    skillIntermediate: 'Intermediate',
    skillAdvanced: 'Advanced',
    skillTechnical: 'Technical Skills',
    skillLanguage: 'Languages',
    xpHint: 'Use /xp [index] to see more details.',
    xpDetailInvalid: 'error: invalid index. Use /xp to list experiences (1-{max}).',
    formacaoHint: 'Use /education [index] to see more details.',
    formacaoDetailInvalid: 'error: invalid index. Use /formacao to list formations (1-{max}).',
    completeAbout: 'About Me',
    completeXp: 'Experience',
    completeFormacao: 'Education',
    completeSkills: 'Skills',
    languageChanged: 'Language switched to English.',
    languageInvalid: 'Supported languages: en, pt',
    exportDone: 'PDF exported successfully!',

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
        {name: 'Portugu\u00eas', value: 100, labelKey: 'skillNative'},
        {name: 'English', value: 66, labelKey: 'skillAdvanced'}
    ],

    experiences: [
        {
            company: 'Open Cascade, part of Capgemini',
            period: 'May 2023 \u2014 Present',
            role: 'Software Engineer',
            description: 'Software engineering at Open Cascade, part of Capgemini. Working with Java, Apache Kafka, and microservices architecture. Porto, Portugal.',
            techs: ['Java', 'Apache Kafka','Spring','Mysql','Rabbitmq','AWS']
        },
        {
            company: 'Celepar',
            period: 'Nov 2016 \u2014 Apr 2023',
            role: 'Systems Development Analyst',
            description: 'Support for state treasury systems. Architecture of new projects. Technology prospection and adoption.',
            techs: ['Java', 'Quarkus','Jakarta EE','Oracle','Vue.js','Openshift']
        },
        {
            company: 'Growyx',
            period: 'Aug 2021 \u2014 Feb 2022',
            role: 'Golang Developer (Freelance)',
            description: 'Development of a microservice for third-party API consumption using Golang.',
            techs: ['PostgreSQL', 'gRPC','Golang','MongoDB','Graphql']
        },
        {
            company: 'Pelissari Gest\u00e3o e Tecnologia',
            period: 'Feb 2016 \u2014 Nov 2016',
            role: 'ABAP Junior Development Consultant',
            description: 'Development of internal project "Simples Assim". Product development using SAPUI5 and SAP Gateway. Small improvements to internal allocation tools.',
            techs: ['SAPUI5', 'C#']
        },
        {
            company: 'Hewlett Packard Enterprise',
            period: 'Jul 2015 \u2014 Feb 2016',
            role: 'Test Analyst',
            description: 'Execution of COT and Regression tests. Support for other projects. Writing and maintenance of automated test scripts. Standardization initiative adopting MVC and OOP paradigms.',
            techs: ['HP Quality Center', 'VBScript']
        },
        {
            company: 'IntellyIT',
            period: 'Jan 2015 \u2014 Jul 2015',
            role: 'Automated Test Analyst Jr.',
            description: 'Allocated at GVT. Execution of COT and Regression tests. Writing and maintenance of automated test scripts. Standardization initiative adopting MVC and OOP paradigms.',
            techs: ['HP Quality Center', 'VBScript', 'SQL']
        },
        {
            company: 'IntellyIT',
            period: 'Jul 2014 \u2014 Jan 2015',
            role: 'Test Analyst Jr.',
            description: 'Allocated at GVT. Writing and execution of test cases for small developments and change requests. Test review. Support for other teams. Test case standardization. Initiative to adopt modularization and parameterization for greater reusability of manual test cases.',
            techs: ['HP Quality Center', 'WebServices', 'PL/SQL']
        }
    ],

    formations: [
        {
            institution: 'Universidade da Beira Interior',
            degree: 'Licenciatura, Computer Science and Engineering',
            period: 'Feb 2025',
            description: 'Diploma recognition (reconhecimento de diploma) in Portugal for international degree equivalence.',
            techs: []
        },
        {
            institution: 'Universidade Positivo',
            degree: 'Postgraduate, Java Development',
            period: '2017 \u2014 2018',
            description: 'Postgraduate specialization in Java development.',
            techs: ['Java']
        },
        {
            institution: 'Universidade Estadual de Mato Grosso do Sul (UEMS)',
            degree: 'Bachelor of Science in Computer Science',
            period: '2007 \u2014 2011',
            description: 'Bachelor\'s degree in Computer Science. Activities: Academic Center of Computer Science as secretary and later as president.',
            techs: ['Computer Science']
        }
    ]
}

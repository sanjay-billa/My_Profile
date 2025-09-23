export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Photographer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Sanjay Billa';

export const experiences = [
    {
        company: 'United States Automobile Association (USAA)',
        role: 'Software Development Engineer',
        duration: 'Nov 2024 – Present',
        logo: require('./assets/usaa.png'),
        points: [
            'Designed and deployed secure, distributed microservices in Java 17 & Spring Boot on Azure AKS, optimizing performance and reliability.',
            'Implemented advanced security with Azure Key Vault, AD, OAuth2/OIDC, and JWT, embedding Zero Trust principles.',
            'Automated CI/CD pipelines in Azure DevOps & GitHub Actions, integrating code quality and vulnerability scans.',
            'Built event-driven systems with Kafka, RabbitMQ, and Azure Event Hub, improving system resilience and scalability.'
        ],
        url: 'https://inncircles.com/#home',
    },
    {
        company: 'Prudential Financial',
        role: 'Java Developer',
        duration: 'May 2023 – Nov 2024',
        logo: require('./assets/prudential.png'),
        points: [
            'Migrated monolithic apps to Spring Boot microservices on Azure AKS, enhancing scalability and availability.',
            'Integrated APIs with Kong and Azure APIM, enforcing OAuth2/OIDC/JWT security.',
            'Developed big-data pipelines using Spark, Kafka, and Azure Data Factory for high-throughput data processing.',
            'Configured monitoring with Azure Monitor, Application Insights, and Splunk to proactively identify issues.'
        ],
        url: '',
    },
    {
        company: 'MassMutual',
        role: 'Java Developer',
        duration: 'Nov 2020 – Dec 2022',
        logo: require('./assets/mm.png'),
        points: [
            'Developed secure APIs and microservices with Spring Boot on Azure, PCF, and AWS.',
            'Implemented concurrent modules for messaging and processing pipelines.',
            'Automated infrastructure provisioning with Terraform and AWS CloudFormation.',
            'Deployed Dockerized microservices to AWS EKS, achieving scalability and reliability.'
        ],
        url: '',
    },
    {
        company: 'Max Life Insurance',
        role: 'Software Analyst',
        duration: 'Apr 2020 – Oct 2020',
        logo: require('./assets/maxlife.png'),
        points: [
            'Supported development and cloud migration of enterprise Java applications to Azure SQL and App Services.',
            'Assisted in coding, debugging, and requirement analysis for internal system enhancements.',
            'Contributed to unit and integration testing, ensuring application reliability.',
            'Documented workflows and collaborated with QA for automated test scenarios.'
        ],
        url: '',
    }
]

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

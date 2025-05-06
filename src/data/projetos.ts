export interface Projeto {
    titulo: string;
    foto: string;
    texto: string;
    tecnologias?: string[];
}

export const projetos: Projeto[] = [
    {
        titulo: "AReS",
        foto: "images/AReS.png",
        texto: "Projeto acadêmico focado no desenvolvimento de uma plataforma web educacional voltada ao treinamento de soft skills (habilidades interpessoais) e à aplicação prática da metodologia ágil Scrum. O sistema simula um ambiente colaborativo de aprendizagem, permitindo aos usuários vivenciarem papéis e processos típicos de um time Scrum, como daily meetings, sprints, product backlog, entre outros. O projeto foi conduzido com foco em usabilidade, interatividade e aplicação de conceitos modernos de desenvolvimento web.",
        tecnologias: ['HTML', 'CSS', 'Javascript', 'Python']
    },
    {
        titulo: "Lotus Chatbot",
        foto: "images/Lotus.png",
        texto: "Desenvolvimento de um chatbot inteligente, capaz de interpretar e responder perguntas com base em documentos carregados pelo próprio usuário. Criado utilizando a linguagem Java, o sistema faz leitura e processamento dos arquivos para oferecer respostas contextuais e relevantes, simulando uma experiência de atendimento personalizado. O projeto envolveu técnicas de manipulação de arquivos, lógica de processamento de linguagem natural e estruturação de dados em tempo real.",
        tecnologias: ['Java', 'MySQL']
    },
    {
        titulo: "Lotus Dashboard",
        foto: "images/Dashboard.png",
        texto: "Criação de uma aplicação web que transforma dados de planilhas Excel em painéis visuais interativos. A ferramenta permite aos usuários visualizar estatísticas de vendas por meio de gráficos dinâmicos, facilitando a análise de desempenho comercial. O projeto incluiu a leitura e tratamento de dados tabulares, a implementação de filtros e visualizações gráficas intuitivas, com foco em acessibilidade e experiência do usuário.",
        tecnologias: ['React', 'Typescript', 'CSS', 'MySQL']
    },
    {
        titulo: "LogiTrack",
        foto: "images/TMS.png",
        texto: "Desenvolvimento de uma solução web integrada para a empresa JJM Log, do setor logístico, com o objetivo de conectar os departamentos operacional, financeiro, comercial, de recursos humanos (RH) e de controle de armazenagem. A aplicação foi construída com React e TypeScript, priorizando escalabilidade, organização modular e integração eficiente entre as áreas. O sistema permite a centralização de informações, automatização de processos internos e melhoria na tomada de decisão por meio de dashboards e relatórios segmentados.",
        tecnologias: ['React', 'Typescript', 'CSS', 'MySQL']
    }
    
    
];

import {
    backend,
    carrent,
    creator,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    jobit,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    redux,
    starbucks,
    tailwind,
    tesla,
    threejs,
    tripguide,
    typescript,
    web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiências",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Frontend",
    icon: backend,
  },
  {
    title: "Desenvolvedor Backend",
    icon: creator,
  },
  {
    title: "Desenvolvedor FullStack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvedor FullStack Júnior",
    company_name: "Sinart",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Agosto 2025 - Presente",
    points: [
      "Contribuindo tanto no backend quanto no frontend e testes. Além da parte técnica, assumi responsabilidades de liderança e colaboração no time, como:",
      "Revisão de código de outros desenvolvedores, garantindo qualidade e boas práticas.",
      "Planejamento e montagem de releases, acompanhando entregas de forma organizada. Atuação como Scrum Master, facilitando cerimônias ágeis e promovendo a produtividade da equipe.",
      "Apoio a outros desenvolvedores, direcionando tarefas, tirando dúvidas e sugerindo melhorias.Compartilhamento de conhecimento, conduzindo apresentações e reuniões técnicas. Desenvolvimento de soluções e melhorias contínuas para os sistemas, sempre com foco em escalabilidade e performance. Utilização de YouTrack para gerenciar tarefas, organizar prioridades, separar cada demanda e manter o processo organizado por desenvolvedor e suas demandas.",
    ],
  },
  {
    title: "Desenvolvedor FullStack Estágiario",
    company_name: "Sinart",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janeiro 2025 - Agosto 2025",
    points: [
      "Desenvolvimento de interfaces e componentes usando React, Typescript, Tailwind e Shadcn. Criação de endpoints, APIs e entidades no Node.js com Prisma ORM.",
      "Escrita de testes automatizados com Playwright, garantindo qualidade no deploy. Automatização de processos com Docker, Portainer e Jenkins.Controle de banco de dados com PostgreSQL via DBeaver",
      "Colaboração em times ágeis, participando de reuniões técnicas, revisões de código e entregas incrementais.",
      "Resultado: contribuí diretamente para a substituição de um sistema legado, participei da resolução de bugs e ajudei a acelerar entregas de novas funcionalidades.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };


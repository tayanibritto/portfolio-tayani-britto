import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    title: 'SisPlanBlueMonitor',
    imageUrl: '/projects/sisplan-bluemonitor.webp',
    description:
      'Sistema desenvolvido em Python para automatizar a comparação de inventários de equipamentos escolares com dados do sistema BlueMonitor.',
    technologies: ['Python', 'OpenPyXL', 'pandas'],
    highlights: ['Automação de processos', 'Redução de trabalho manual', 'Uso profissional'],
    githubUrl: 'https://github.com/tayanibritto/SisPlanBlueMonitor',
  },
  {
    title: 'Diário de Bordo',
    imageUrl: '/projects/diario-de-bordo.webp',
    description:
      'Aplicativo Web Progressivo (PWA) para registro de atividades diárias com funcionamento offline e persistência local.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Service Worker'],
    highlights: [
      'Funcionamento offline',
      'Instalação como aplicativo (PWA)',
      'Persistência local de dados',
    ],
    githubUrl: 'https://github.com/tayanibritto/diario-de-bordo',
  },
  {
    title: 'SisPlanDataMob',
    imageUrl: '/projects/sisplan-datamob.webp',
    description:
      'Sistema desenvolvido em Python para automatizar a comparação de inventários de tablets e smartphones escolares com dados do sistema DataMob.',
    technologies: ['Python', 'OpenPyXL', 'pandas'],
    highlights: [
      'Identificação de divergências',
      'Validação de dados e possíveis erros de digitação',
      'Automação de trabalho',
    ],
    githubUrl: 'https://github.com/tayanibritto/SisPlanDataMob',
  },
  {
    title: 'Portfólio Profissional',
    imageUrl: '/projects/portfolio.webp',
    description:
      'Este mesmo portfólio! Foi desenvolvido em Next.js para apresentar meus projetos, experiência profissional, formação e competências técnicas.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Bootstrap', 'Jest', 'GitHub Actions'],
    highlights: ['Dark Mode', 'SEO', 'Acessibilidade', 'Responsividade'],
    githubUrl: 'https://github.com/tayanibritto/portfolio-tayani-britto',
  },
];

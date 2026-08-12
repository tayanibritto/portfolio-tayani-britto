import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    title: 'SisPlanBlueMonitor',
    description:
      'Sistema desenvolvido em Python para automatizar a comparação de inventários de equipamentos escolares com dados do sistema BlueMonitor.',
    technologies: ['Python', 'OpenPyXL', 'pandas'],
    highlights: ['Automação de processos', 'Redução de trabalho manual', 'Uso profissional'],
    githubUrl: 'https://github.com/tayanibritto/SisPlanBlueMonitor',
  },
  {
    title: 'Diário de Bordo',
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
    description:
      'Sistema desenvolvido em Python para automatizar a comparação de inventários de tablets e smartphones escolares com dados do sistema DataMob.',
    technologies: ['Python', 'OpenPyXL', 'pandas'],
    highlights: [
      'Identificação automática de divergências',
      'Validação de dados e possíveis erros de digitação',
      'Automação de conferência de inventários escolares',
    ],
    githubUrl: 'https://github.com/tayanibritto/SisPlanDataMob',
  },
];

import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educación',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Diseño Estratégico e Innovación',
      institution: 'ISIL Escuela de Negocios',
      image: import('@/assets/logos/isil-logo.jpg'),
      dates: [new Date('2024.04'), new Date('2025.12')],
      description: 'Bachiller en Diseño Estratégico e Innovación.',
      links: [website({ url: 'https://isil.pe/' })],
    },
    {
      title: 'Diseño Gráfico',
      institution: 'Instituto San Ignacio de Loyola (ISIL)',
      image: import('@/assets/logos/isil-logo.jpg'),
      dates: [new Date('2021.04'), new Date('2023.12')],
      description: 'Egresado de Diseño Gráfico.',
      links: [website({ url: 'https://isil.pe/' })],
    },
    {
      title: 'Programa Avanzado de Inglés',
      institution: 'Centro de Idiomas Británico',
      image: import('@/assets/logos/britanico-logo.png'),
      dates: [new Date('2021.04'), new Date('2022.10')],
      description: 'Certificado de competencia lingüística en inglés nivel C1.',
      links: [website({ url: 'https://www.britanico.edu.pe/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

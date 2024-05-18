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
      title: 'Diseño Gráfico',
      institution: 'Instituto San Ignacio de Loyola',
      image: import('@/assets/logos/isil-logo.jpg'),
      dates: [new Date('2021.04'), new Date('2023.12')],
      description: 'Egresada de la carrera de Diseño Gráfico en ISIL.',
      links: [website({ url: 'https://isil.pe/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

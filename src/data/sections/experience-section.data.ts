import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, website } from '../helpers/links';
import { ilustrator, photoshop, afterEffects, canva } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experiencia',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Diseñadora Gráfica',
      company: 'ISDIN',
      image: import('@/assets/logos/isdin-logo.jpg'),
      dates: [new Date('2023-11'), new Date()],
      description: `
        - Diseño de ilustraciones y folletería exterior.
        - Retoque fotográfico y creación de contenido para redes sociales.
        - Diseño de banners y publicaciones para redes sociales.
        - Creación de contenido para stories y reels.
      `,
      tagsList: {
        title: 'Habilidades utilizadas',
        tags: [ilustrator(), photoshop(), afterEffects(), canva()],
      },
      links: [
        website({ url: 'https://www.isdin.com/es-PE/' }),
        instagram({ url: 'https://www.instagram.com/isdinperu/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

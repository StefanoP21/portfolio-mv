import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, website } from '../helpers/links';
import { illustrator, photoshop, afterEffects, canva } from '../helpers/skills';

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
      dates: [new Date('2023.10'), null],
      description: `
        - Encargada del diseño de folletería y supervición de impresión.
        - Edición de vídeos, post, reels y stories en Social Media.
        - Diseño de vitrinas y paneles para puntos de venta.
        - Diseño de banners y visuales para la página web.
      `,
      tagsList: {
        title: 'Herramientas utilizadas',
        tags: [illustrator(), afterEffects(), photoshop(), canva()],
      },
      links: [
        website({
          url: 'https://www.behance.net/gallery/212098991/Portafolio-ISDIN-2024-Disenadora-Mariana-Varea/modules/1205998797',
        }),
        instagram({ url: 'https://www.instagram.com/isdinperu/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

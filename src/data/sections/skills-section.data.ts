import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  illustrator,
  photoshop,
  indesign,
  figma,
  canva,
  behance,
  afterEffects,
  premierePro,
  lightroom,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Habilidades',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Conozco bien',
      skills: [
        illustrator({
          level: 5,
          description: 'Diseño de logotipos, ilustraciones y otros proyectos de diseño gráfico.',
        }),
        photoshop({
          level: 4,
          description: 'Retoque fotográfico y composición de imágenes.',
        }),
        indesign({
          level: 3,
          description: 'Maquetación de revistas, libros y folletos publicitario',
        }),
        canva({
          level: 5,
          description: 'Proyectos rápidos de diseño gráfico y publicaciones en redes sociales.',
        }),
        afterEffects({
          level: 4,
          description: 'Animaciones y edición de video.',
        }),
        figma({ level: 3, description: 'Diseño de interfaces y prototipado.' }),
        behance({ level: 3 }),
      ],
    },
    {
      title: 'Quiero aprender',
      skills: [premierePro(), lightroom()],
    },
    {
      title: 'Idiomas',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Español - Nativo' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

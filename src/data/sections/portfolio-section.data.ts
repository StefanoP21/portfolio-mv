import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { youtube } from '../helpers/links';
import { illustrator, afterEffects, canva, photoshop } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projectos',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Branding - Origen',
      image: import('@/assets/portfolio/origen-project.png'),
      dates: [new Date('2023.08'), new Date('2023.10')],
      details: [
        { label: 'Tamaño de equipo', value: '4' },
        { label: 'Mi rol', value: ['Diseñadora Gráfica'] },
        { label: 'Compañía', value: 'ISIL' },
        { label: 'Categoría', value: ['Diseño', 'Branding'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/origen-project-s1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/origen-project-s2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/origen-project-s3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/origen-project-s4.png'), alt: 'Fourth screenshot' },
      ],
      description:
        'Diseño de identidad visual para la marca Origen, una empresa de productos de café orgánicos. El proyecto incluyó el diseño de logotipo, paleta de colores, tipografía y aplicaciones en papelería y packaging.',
      tagsList: {
        title: 'Heramientas utilizadas',
        tags: [illustrator(), photoshop(), canva()],
      },
      links: [],
    },
    {
      name: 'Packaging - SkullCandy',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2023.06'), new Date('2023.08')],
      details: [
        { label: 'Tamaño de equipo', value: '1' },
        { label: 'Mi rol', value: ['Diseñadora Gráfica'] },
        { label: 'Compañía', value: 'ISIL' },
        { label: 'Categoría', value: ['Diseño', 'Packaging'] },
      ],
      screenshots: [{ src: import('@/assets/portfolio/packaging-project-s1.png'), alt: 'First screenshot' }],
      description:
        'Diseño de packaging para la marca SkullCandy, una empresa de audífonos y accesorios para dispositivos móviles. El proyecto incluyó el diseño de cajas y etiquetas para los productos de la marca.',
      tagsList: {
        title: 'Heramientas utilizadas',
        tags: [illustrator(), photoshop(), canva()],
      },
      links: [],
    },
    {
      name: 'Social Media - Tama',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2022.08'), new Date('2022.10')],
      details: [
        { label: 'Tamaño de equipo', value: '1' },
        { label: 'Mi rol', value: ['Diseñadora Gráfica'] },
        { label: 'Compañía', value: 'ISIL' },
        { label: 'Categoría', value: ['Diseño', 'Social Media'] },
      ],
      screenshots: [{ src: import('@/assets/portfolio/social-media-project-s1.png'), alt: 'First screenshot' }],
      description:
        'Diseño de contenido para redes sociales para la marca Tama, una empresa de artesania peruana. El proyecto incluyó el diseño de publicaciones para Instagram.',
      tagsList: {
        title: 'Heramientas utilizadas',
        tags: [photoshop(), illustrator(), canva()],
      },
      links: [],
    },
    {
      name: 'Audiovisuales - Footloose',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2022.06'), new Date('2022.08')],
      details: [
        { label: 'Tamaño de equipo', value: '1' },
        { label: 'Mi rol', value: ['Diseñadora Gráfica'] },
        { label: 'Compañía', value: 'ISIL' },
        { label: 'Categoría', value: ['Diseño', 'Audiovisuales'] },
      ],
      pdfDetails: [{ label: 'Youtube', value: 'FOOTLOSE Video', url: 'https://www.youtube.com/watch?v=vrJwKL_QQrA' }],
      screenshots: [{ src: import('@/assets/portfolio/footlose-project-s1.png'), alt: 'First screenshot' }],
      description:
        'Creación de contenido audiovisual para la marca Footloose, una empresa de calzado deportivo. El proyecto incluyó la creación de videos promocionales para redes sociales.',
      tagsList: {
        title: 'Heramientas utilizadas',
        tags: [afterEffects(), illustrator()],
      },
      links: [youtube({ url: 'https://www.youtube.com/watch?v=vrJwKL_QQrA' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, instagram } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile.png'),
  fullName: 'Mariana Varea Sobero',
  role: 'Diseñadora Gráfica',
  details: [
    { label: 'Teléfono', value: '(+51) 960 048 587', url: 'tel:+51960048587' },
    { label: 'Correo', value: 'vareamariana2@gmail.com', url: 'mailto:vareamariana2@gmail.com' },
  ],
  pdfDetails: [
    { label: 'Teléfono', value: '(+51) 960 048 587' },
    { label: 'Correo', value: 'vareamariana2@gmail.com' },
    {
      label: 'Portafolio',
      value: 'https://mariana-varea.vercel.app',
      url: 'https://mariana-varea.vercel.app/',
      fullRow: true,
    },
    {
      label: 'LinkedIn',
      value: 'https://linkedin.com/mariana',
      url: 'https://linkedin.com/in/mariana-varea-b31984271/',
    },
  ],
  description:
    'Diseñadora gráfica con experiencia en diseño de identidad visual y diseño de packaging. Me apasiona el diseño y la ilustración, siempre busco aprender y mejorar en cada proyecto. Me considero una persona creativa y comprometida con mi trabajo.',
  tags: [{ name: 'Disponible para trabajar' }],
  action: {
    label: 'Descargar CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mariana_Varea.pdf',
  },
  links: [
    linkedin({ url: 'https://www.linkedin.com/in/mariana-varea-b31984271/' }),
    instagram({
      url: 'https://www.instagram.com/mariana_varea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

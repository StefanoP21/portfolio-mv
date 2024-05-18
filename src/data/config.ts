import type { Config } from '@/types/data';
import { es } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: es,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Mariana Varea - Diseñadora Gráfica',
    description:
      'Diseñadora Gráfica con experiencia en diseño de marca, diseño editorial, diseño web y diseño de interfaz de usuario. Disponible para proyectos de diseño gráfico y diseño web.',
    faviconPath: '/src/assets/photo-mv-sq.png',
  },
  pdf: {
    footer:
      'Este documento fue generado automáticamente por el sitio web de Mariana Varea. La información contenida en este documento puede estar desactualizada. Por favor, visite el sitio web de Mariana Varea para obtener la información más reciente.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

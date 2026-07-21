/**
 * Surfaces YaoundéLogis — clair / sombre.
 *
 * Le dark n’est pas un « invert » générique : fonds verts très profonds
 * (ancrés sur `#0F3D2E`), texte clair, or inchangé comme accent.
 */

import { yaoundeLogisBrand } from './brand-foundation';

export type YaoundeLogisThemeMode = 'light' | 'dark';

export const yaoundeLogisLightSurfaces = {
  bg: yaoundeLogisBrand.white,
  bgRaised: yaoundeLogisBrand.white,
  bgSection: yaoundeLogisBrand.grayLight,
  bgCream: yaoundeLogisBrand.cream,
  bgInput: yaoundeLogisBrand.grayLight,
  border: yaoundeLogisBrand.border,
  borderStrong: '#9CA3AF',
  text: yaoundeLogisBrand.grayDark,
  textMuted: '#5C6B63',
  textInverse: yaoundeLogisBrand.white,
  heading: yaoundeLogisBrand.greenDark,
  link: yaoundeLogisBrand.green,
  linkHover: yaoundeLogisBrand.greenDark,
  price: yaoundeLogisBrand.green,
  primary: yaoundeLogisBrand.green,
  primaryHover: yaoundeLogisBrand.greenDark,
  primaryContrast: yaoundeLogisBrand.white,
  secondary: yaoundeLogisBrand.gold,
  secondaryContrast: yaoundeLogisBrand.greenDark,
  shadowCard: '0 4px 20px rgba(15, 61, 46, 0.08)',
  shadowElevated: '0 8px 32px rgba(15, 61, 46, 0.12)',
  overlay: 'rgba(15, 61, 46, 0.45)',
} as const;

export const yaoundeLogisDarkSurfaces = {
  bg: '#0A1F18',
  bgRaised: '#122B22',
  bgSection: '#16352A',
  bgCream: '#1A3D2E',
  bgInput: '#16352A',
  border: 'rgba(255, 255, 255, 0.12)',
  borderStrong: 'rgba(255, 255, 255, 0.22)',
  text: '#E8F0EB',
  textMuted: '#A8B5AE',
  textInverse: '#0A1F18',
  heading: '#F5F9F6',
  link: '#5CB578',
  linkHover: '#8CCB9F',
  price: '#5CB578',
  primary: '#3D9B62',
  primaryHover: '#5CB578',
  primaryContrast: '#0A1F18',
  secondary: yaoundeLogisBrand.gold,
  secondaryContrast: '#0F3D2E',
  shadowCard: '0 4px 24px rgba(0, 0, 0, 0.45)',
  shadowElevated: '0 12px 40px rgba(0, 0, 0, 0.55)',
  overlay: 'rgba(6, 18, 14, 0.85)',
} as const;

export type YaoundeLogisSurfaces = typeof yaoundeLogisLightSurfaces;

export const yaoundeLogisSurfacesByMode: Record<
  YaoundeLogisThemeMode,
  YaoundeLogisSurfaces
> = {
  light: yaoundeLogisLightSurfaces,
  dark: yaoundeLogisDarkSurfaces,
};

/** Badges d’annonce adaptés au fond sombre */
export const yaoundeLogisListingStatusDark = {
  disponible: {
    label: 'Disponible',
    background: 'rgba(46, 125, 78, 0.22)',
    text: '#8CCB9F',
    border: 'rgba(92, 181, 120, 0.45)',
    role: 'positive' as const,
  },
  reserve: {
    label: 'Réservé',
    background: 'rgba(230, 81, 0, 0.22)',
    text: '#FFB74D',
    border: 'rgba(255, 183, 77, 0.45)',
    role: 'warning' as const,
  },
  loue: {
    label: 'Loué',
    background: 'rgba(84, 110, 122, 0.28)',
    text: '#B0BEC5',
    border: 'rgba(176, 190, 197, 0.35)',
    role: 'neutral' as const,
  },
  agentVerifie: {
    label: 'Agent vérifié',
    background: 'rgba(46, 125, 78, 0.28)',
    text: '#B8E0C9',
    border: 'rgba(129, 199, 132, 0.5)',
    role: 'positive' as const,
  },
  nouveau: {
    label: 'NOUVEAU',
    background: yaoundeLogisBrand.gold,
    text: yaoundeLogisBrand.greenDark,
    border: yaoundeLogisBrand.gold,
    role: 'accent' as const,
  },
} as const;

const SURFACE_PREFIX = '--yaoundelogis';

function toKebab(key: string): string {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export function yaoundeLogisSurfacesToStyleObject(
  mode: YaoundeLogisThemeMode = 'light',
): Record<string, string> {
  const surfaces = yaoundeLogisSurfacesByMode[mode];
  const style: Record<string, string> = {};
  for (const key of Object.keys(surfaces) as Array<keyof YaoundeLogisSurfaces>) {
    style[`${SURFACE_PREFIX}-surface-${toKebab(key)}`] = surfaces[key];
  }
  return style;
}

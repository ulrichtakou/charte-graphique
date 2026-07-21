import type { CSSProperties } from 'react';
import {
  fontWeights,
  lineHeights,
  typeScale,
  fontFamilies,
} from '../typography/typography-tokens';
import { yaoundeLogisSemantic } from './brand-foundation';
import {
  yaoundeLogisSurfacesByMode,
  type YaoundeLogisThemeMode,
} from './surface-tokens';

/**
 * Presets contenu immobilier — au-dessus de l’échelle générique.
 * Prix et titres utilisent la hiérarchie métier, pas seulement `h3` / `body`.
 */
export const yaoundeLogisContentPresets = {
  pageTitle: {
    scale: '3xl' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'tight' as const,
    colorKey: 'heading' as const,
  },
  sectionTitle: {
    scale: 'xl' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'tight' as const,
    colorKey: 'heading' as const,
  },
  listingTitle: {
    scale: 'lg' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'tight' as const,
    colorKey: 'heading' as const,
  },
  listingPrice: {
    scale: 'md' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'normal' as const,
    colorKey: 'price' as const,
  },
  listingLocation: {
    scale: 'sm' as const,
    fontWeight: 'regular' as const,
    lineHeight: 'normal' as const,
    colorKey: 'textMuted' as const,
  },
  legalCaption: {
    scale: 'xs' as const,
    fontWeight: 'regular' as const,
    lineHeight: 'normal' as const,
    colorKey: 'textMuted' as const,
  },
} as const;

export type YaoundeLogisContentPresetKey =
  keyof typeof yaoundeLogisContentPresets;

export function resolveYaoundeLogisContentStyle(
  preset: YaoundeLogisContentPresetKey,
  mode: YaoundeLogisThemeMode = 'light',
): CSSProperties {
  const p = yaoundeLogisContentPresets[preset];
  const surfaces = yaoundeLogisSurfacesByMode[mode];
  return {
    fontFamily: fontFamilies.sans,
    fontSize: typeScale[p.scale].fontSize,
    fontWeight: fontWeights[p.fontWeight],
    lineHeight: lineHeights[p.lineHeight],
    color: surfaces[p.colorKey],
    margin: 0,
  };
}

export const yaoundeLogisFontFamily = fontFamilies.sans;

/** @deprecated Couleurs light uniquement — préférer `resolveYaoundeLogisContentStyle(preset, mode)` */
export const yaoundeLogisContentColorsLight = {
  heading: yaoundeLogisSemantic.heading,
  price: yaoundeLogisSemantic.price,
  location: '#5C6B63',
} as const;

export function yaoundeLogisTypographyToStyleObject(): Record<string, string> {
  return {
    '--yaoundelogis-font-family': fontFamilies.sans,
  };
}

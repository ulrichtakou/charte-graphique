import type { CSSProperties } from 'react';
import {
  fontWeights,
  lineHeights,
  typeScale,
  fontFamilies,
} from '../typography/typography-tokens';
import { yaoundeLogisSemantic } from './brand-foundation';

/**
 * Presets contenu immobilier — au-dessus de l’échelle générique.
 * Prix et titres utilisent la hiérarchie métier, pas seulement `h3` / `body`.
 */
export const yaoundeLogisContentPresets = {
  pageTitle: {
    scale: '3xl' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'tight' as const,
    color: yaoundeLogisSemantic.heading,
  },
  sectionTitle: {
    scale: 'xl' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'tight' as const,
    color: yaoundeLogisSemantic.heading,
  },
  listingTitle: {
    scale: 'lg' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'tight' as const,
    color: yaoundeLogisSemantic.heading,
  },
  listingPrice: {
    scale: 'md' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'normal' as const,
    color: yaoundeLogisSemantic.price,
  },
  listingLocation: {
    scale: 'sm' as const,
    fontWeight: 'regular' as const,
    lineHeight: 'normal' as const,
    color: '#5C6B63',
  },
  legalCaption: {
    scale: 'xs' as const,
    fontWeight: 'regular' as const,
    lineHeight: 'normal' as const,
    color: '#6B7280',
  },
} as const;

export type YaoundeLogisContentPresetKey =
  keyof typeof yaoundeLogisContentPresets;

export function resolveYaoundeLogisContentStyle(
  preset: YaoundeLogisContentPresetKey,
): CSSProperties {
  const p = yaoundeLogisContentPresets[preset];
  return {
    fontFamily: fontFamilies.sans,
    fontSize: typeScale[p.scale].fontSize,
    fontWeight: fontWeights[p.fontWeight],
    lineHeight: lineHeights[p.lineHeight],
    color: p.color,
    margin: 0,
  };
}

export const yaoundeLogisFontFamily = fontFamilies.sans;

export function yaoundeLogisTypographyToStyleObject(): Record<string, string> {
  return {
    '--yaoundelogis-font-family': fontFamilies.sans,
  };
}

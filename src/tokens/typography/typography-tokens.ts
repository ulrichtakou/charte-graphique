/**
 * Typography tokens — font families, scale, weights, rhythm, and text state colors.
 */

import type { CSSProperties } from 'react';
import { primitiveColors } from '../colors/primitives/primitive-colors';

export const fontFamilies = {
  /** UI and body copy */
  sans:
    '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  /** Code, keys, technical strings */
  mono:
    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "Courier New", monospace',
} as const;

export type FontFamilyToken = keyof typeof fontFamilies;

/**
 * Splits a CSS `font-family` list (commas, respecting quoted names).
 */
export function splitCssFontFamilyList(stack: string): string[] {
  const parts: string[] = [];
  let buf = '';
  let quote: '"' | "'" | null = null;
  for (let i = 0; i < stack.length; i++) {
    const ch = stack[i];
    if (quote) {
      buf += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      buf += ch;
      continue;
    }
    if (ch === ',') {
      const t = buf.trim();
      if (t) parts.push(t);
      buf = '';
      continue;
    }
    buf += ch;
  }
  const tail = buf.trim();
  if (tail) parts.push(tail);
  return parts;
}

function faceLabel(face: string): string {
  const t = face.trim();
  if (
    (t.startsWith('"') && t.endsWith('"')) ||
    (t.startsWith("'") && t.endsWith("'"))
  ) {
    return t.slice(1, -1);
  }
  return t;
}

function specimenFontFamilyForStackFace(
  face: string,
  kind: 'sans' | 'mono',
): string {
  const t = face.trim();
  if (kind === 'sans' && /^sans-serif$/i.test(t)) return 'sans-serif';
  if (kind === 'mono' && /^monospace$/i.test(t)) return 'monospace';
  return `${t}, ${kind === 'sans' ? 'sans-serif' : 'monospace'}`;
}

/** Each face from `fontFamilies.sans`, forced alone (+ generic) for design QA */
export const sansFontStackFaceSpecimens = splitCssFontFamilyList(
  fontFamilies.sans,
).map((face) => ({
  face,
  label: faceLabel(face),
  fontFamily: specimenFontFamilyForStackFace(face, 'sans'),
}));

/** Each face from `fontFamilies.mono`, forced alone (+ generic) for design QA */
export const monoFontStackFaceSpecimens = splitCssFontFamilyList(
  fontFamilies.mono,
).map((face) => ({
  face,
  label: faceLabel(face),
  fontFamily: specimenFontFamilyForStackFace(face, 'mono'),
}));

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type FontWeightToken = keyof typeof fontWeights;

/**
 * Inclinaison du texte — `italic` utilise les glyphes italiques de la police ;
 * `oblique` penche mécaniquement les formes droites (utile si pas d’italique dédiée).
 */
export const fontStyles = {
  normal: 'normal',
  italic: 'italic',
  oblique: 'oblique',
} as const;

export type FontStyleToken = keyof typeof fontStyles;

export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export type LineHeightToken = keyof typeof lineHeights;

export const letterSpacings = {
  tight: '-0.025em',
  normal: '0em',
  wide: '0.05em',
} as const;

export type LetterSpacingToken = keyof typeof letterSpacings;

/**
 * Modular type scale — use these as the single source for font-size tokens.
 */
export const typeScale = {
  '3xs': { fontSize: '0.625rem', pxEquivalent: 10 },
  '2xs': { fontSize: '0.6875rem', pxEquivalent: 11 },
  xs: { fontSize: '0.75rem', pxEquivalent: 12 },
  sm: { fontSize: '0.875rem', pxEquivalent: 14 },
  base: { fontSize: '1rem', pxEquivalent: 16 },
  md: { fontSize: '1.125rem', pxEquivalent: 18 },
  lg: { fontSize: '1.25rem', pxEquivalent: 20 },
  xl: { fontSize: '1.5rem', pxEquivalent: 24 },
  '2xl': { fontSize: '1.875rem', pxEquivalent: 30 },
  '3xl': { fontSize: '2.25rem', pxEquivalent: 36 },
  '4xl': { fontSize: '3rem', pxEquivalent: 48 },
  '5xl': { fontSize: '3.75rem', pxEquivalent: 60 },
} as const;

export type TypeScaleToken = keyof typeof typeScale;

export const headingPresets = {
  h1: {
    level: 1 as const,
    scale: '4xl' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'tight' as const,
    letterSpacing: 'tight' as const,
  },
  h2: {
    level: 2 as const,
    scale: '3xl' as const,
    fontWeight: 'bold' as const,
    lineHeight: 'tight' as const,
    letterSpacing: 'tight' as const,
  },
  h3: {
    level: 3 as const,
    scale: '2xl' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'tight' as const,
    letterSpacing: 'normal' as const,
  },
  h4: {
    level: 4 as const,
    scale: 'xl' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'normal' as const,
    letterSpacing: 'normal' as const,
  },
  h5: {
    level: 5 as const,
    scale: 'lg' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'normal' as const,
    letterSpacing: 'normal' as const,
  },
  h6: {
    level: 6 as const,
    scale: 'base' as const,
    fontWeight: 'semibold' as const,
    lineHeight: 'normal' as const,
    letterSpacing: 'wide' as const,
  },
} as const;

export type HeadingPresetKey = keyof typeof headingPresets;

export const bodyTextPresets = {
  large: {
    scale: 'md' as const,
    lineHeight: 'relaxed' as const,
    fontWeight: 'regular' as const,
  },
  base: {
    scale: 'base' as const,
    lineHeight: 'normal' as const,
    fontWeight: 'regular' as const,
  },
  small: {
    scale: 'sm' as const,
    lineHeight: 'normal' as const,
    fontWeight: 'regular' as const,
  },
  xsmall: {
    scale: 'xs' as const,
    lineHeight: 'normal' as const,
    fontWeight: 'regular' as const,
  },
} as const;

export type BodyTextPresetKey = keyof typeof bodyTextPresets;

export type TypographyResolveOptions = {
  /** Défaut : `normal` */
  fontStyle?: FontStyleToken;
};

/** Semantic text colors (hex), aligned with common UI states */
export const textStateColors = {
  primary: primitiveColors.gray[900],
  secondary: primitiveColors.gray[600],
  link: primitiveColors.blue[600],
  linkHover: primitiveColors.blue[700],
  error: primitiveColors.red[600],
  warning: primitiveColors.orange[700],
  success: primitiveColors.green[700],
  info: primitiveColors.cyan[700],
  disabled: primitiveColors.gray[400],
} as const;

export type TextStateToken = keyof typeof textStateColors;

const TYPO_PREFIX = '--sparing-typography';

export function typographyRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {
    [`${TYPO_PREFIX}-font-sans`]: fontFamilies.sans,
    [`${TYPO_PREFIX}-font-mono`]: fontFamilies.mono,
  };

  (Object.keys(typeScale) as TypeScaleToken[]).forEach((key) => {
    style[`${TYPO_PREFIX}-size-${key}`] = typeScale[key].fontSize;
  });

  (Object.keys(fontWeights) as FontWeightToken[]).forEach((key) => {
    style[`${TYPO_PREFIX}-weight-${key}`] = String(fontWeights[key]);
  });

  (Object.keys(lineHeights) as LineHeightToken[]).forEach((key) => {
    style[`${TYPO_PREFIX}-leading-${key}`] = String(lineHeights[key]);
  });

  (Object.keys(letterSpacings) as LetterSpacingToken[]).forEach((key) => {
    style[`${TYPO_PREFIX}-tracking-${key}`] = letterSpacings[key];
  });

  (Object.keys(fontStyles) as FontStyleToken[]).forEach((key) => {
    style[`${TYPO_PREFIX}-style-${key}`] = fontStyles[key];
  });

  return style;
}

export function resolveHeadingStyle(
  preset: HeadingPresetKey,
  options?: TypographyResolveOptions,
): CSSProperties {
  const h = headingPresets[preset];
  const slant = options?.fontStyle ?? 'normal';
  return {
    fontFamily: fontFamilies.sans,
    fontSize: typeScale[h.scale].fontSize,
    fontWeight: fontWeights[h.fontWeight],
    fontStyle: fontStyles[slant],
    lineHeight: lineHeights[h.lineHeight],
    letterSpacing: letterSpacings[h.letterSpacing],
    margin: 0,
  };
}

export function resolveBodyTextStyle(
  preset: BodyTextPresetKey,
  options?: TypographyResolveOptions,
): CSSProperties {
  const b = bodyTextPresets[preset];
  const slant = options?.fontStyle ?? 'normal';
  return {
    fontFamily: fontFamilies.sans,
    fontSize: typeScale[b.scale].fontSize,
    fontWeight: fontWeights[b.fontWeight],
    fontStyle: fontStyles[slant],
    lineHeight: lineHeights[b.lineHeight],
    margin: 0,
  };
}

// React.CSSProperties requires React - shared-ui has react. If eslint complains about React namespace, use import type { CSSProperties } from 'react'

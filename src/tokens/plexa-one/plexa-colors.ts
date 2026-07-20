/**
 * Plexa One DS v5 — color tokens.
 * Extracted from apps/plexaone/docs/plexa-one-design-system-v5.html.
 *
 * Two layers:
 *  - Brand fixed colors (mint, blue, status) — identical light/dark
 *  - Surface & text tokens — different per theme
 */

const PLEXA_PREFIX = '--plexa';

export const plexaBrandColors = {
  mint: '#00E5B0',
  mintDim: '#00C899',
  mintFaint: 'rgba(0,229,176,.10)',
  mintGlow: 'rgba(0,229,176,.20)',
  blue: '#1A4BDB',
  blueDim: '#1540C0',
  blueFaint: 'rgba(26,75,219,.10)',
  blueGlow: 'rgba(26,75,219,.20)',
  warning: '#F59E0B',
  warningFaint: 'rgba(245,158,11,.10)',
  danger: '#F5405A',
  dangerFaint: 'rgba(245,64,90,.10)',
  infoDark: '#7DA4FF',
} as const;

export const plexaLightColors = {
  primary: plexaBrandColors.blue,
  primaryDim: plexaBrandColors.blueDim,
  primaryFaint: plexaBrandColors.blueFaint,
  primaryGlow: plexaBrandColors.blueGlow,
  success: '#10B981',
  successFaint: 'rgba(16,185,129,.10)',
  bg: '#F8F9FC',
  bg2: '#FFFFFF',
  bg3: '#EEF1F8',
  bg4: '#E4E9F4',
  bgRaised: '#FFFFFF',
  border: 'rgba(0,0,0,.07)',
  borderMid: 'rgba(0,0,0,.12)',
  borderHi: 'rgba(0,0,0,.22)',
  text1: '#060D1A',
  text2: '#5A6E8A',
  text3: '#A8B8CC',
  textInv: '#FFFFFF',
  dotColor: 'rgba(26,75,219,.12)',
  shadowSm: '0 1px 3px rgba(0,0,0,.07)',
  shadowMd: '0 4px 20px rgba(0,0,0,.09)',
  shadowLg: '0 12px 40px rgba(0,0,0,.11)',
  shadowCard: '0 8px 32px rgba(26,75,219,.10), 0 0 0 1px rgba(26,75,219,.15)',
  overlay: 'rgba(0,0,0,.45)',
  navBg: 'rgba(248,249,252,.85)',
} as const;

export const plexaDarkColors = {
  primary: plexaBrandColors.mint,
  primaryDim: plexaBrandColors.mintDim,
  primaryFaint: plexaBrandColors.mintFaint,
  primaryGlow: plexaBrandColors.mintGlow,
  success: '#4ADE80',
  successFaint: 'rgba(74,222,128,.10)',
  bg: '#060D1A',
  bg2: '#0A1525',
  bg3: '#0E1D33',
  bg4: '#132440',
  bgRaised: '#0C1830',
  border: 'rgba(255,255,255,.07)',
  borderMid: 'rgba(255,255,255,.12)',
  borderHi: 'rgba(255,255,255,.22)',
  text1: '#EDF2FF',
  text2: '#7A95B8',
  text3: '#2E4D6A',
  textInv: '#060D1A',
  dotColor: 'rgba(0,229,176,.10)',
  shadowSm: '0 1px 3px rgba(0,0,0,.5)',
  shadowMd: '0 4px 20px rgba(0,0,0,.6)',
  shadowLg: '0 12px 40px rgba(0,0,0,.7)',
  shadowCard: '0 8px 32px rgba(0,0,0,.5), 0 0 0 1px rgba(0,229,176,.18)',
  overlay: 'rgba(6,13,26,.92)',
  navBg: 'rgba(6,13,26,.85)',
} as const;

export type PlexaThemeMode = 'light' | 'dark';

export type PlexaThemedColors = {
  readonly primary: string;
  readonly primaryDim: string;
  readonly primaryFaint: string;
  readonly primaryGlow: string;
  readonly success: string;
  readonly successFaint: string;
  readonly bg: string;
  readonly bg2: string;
  readonly bg3: string;
  readonly bg4: string;
  readonly bgRaised: string;
  readonly border: string;
  readonly borderMid: string;
  readonly borderHi: string;
  readonly text1: string;
  readonly text2: string;
  readonly text3: string;
  readonly textInv: string;
  readonly dotColor: string;
  readonly shadowSm: string;
  readonly shadowMd: string;
  readonly shadowLg: string;
  readonly shadowCard: string;
  readonly overlay: string;
  readonly navBg: string;
};

export const plexaColorsByMode: Record<PlexaThemeMode, PlexaThemedColors> = {
  light: plexaLightColors,
  dark: plexaDarkColors,
};

const CAMEL_TO_KEBAB = /[A-Z0-9]/g;

function toKebab(key: string): string {
  return key.replace(CAMEL_TO_KEBAB, (m) => `-${m.toLowerCase()}`);
}

export function plexaColorCssVar(key: keyof PlexaThemedColors): string {
  return `${PLEXA_PREFIX}-${toKebab(key)}`;
}

export function plexaBrandCssVar(key: keyof typeof plexaBrandColors): string {
  return `${PLEXA_PREFIX}-${toKebab(key)}`;
}

/** All brand vars (fixed across themes). */
export function plexaBrandToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(plexaBrandColors) as Array<
    keyof typeof plexaBrandColors
  >) {
    style[plexaBrandCssVar(key)] = plexaBrandColors[key];
  }
  return style;
}

/** Theme-dependent surface/text vars for a given mode. */
export function plexaThemedColorsToStyleObject(
  mode: PlexaThemeMode,
): Record<string, string> {
  const palette = plexaColorsByMode[mode];
  const style: Record<string, string> = {};
  for (const key of Object.keys(palette) as Array<keyof PlexaThemedColors>) {
    style[plexaColorCssVar(key)] = palette[key];
  }
  return style;
}

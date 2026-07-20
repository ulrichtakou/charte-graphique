/**
 * Plexa One DS v5 — radius scale.
 * Source: --r-xs..--r-pill from plexa-one-design-system-v5.html.
 */

const PLEXA_PREFIX = '--plexa-r';

export const plexaRadii = {
  xs: '3px',
  sm: '5px',
  md: '9px',
  lg: '12px',
  xl: '16px',
  '2xl': '22px',
  pill: '9999px',
} as const;

export type PlexaRadiusToken = keyof typeof plexaRadii;

export function plexaRadiusCssVar(token: PlexaRadiusToken): string {
  return `${PLEXA_PREFIX}-${token}`;
}

export function plexaRadiiToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(plexaRadii) as PlexaRadiusToken[]) {
    style[plexaRadiusCssVar(key)] = plexaRadii[key];
  }
  return style;
}

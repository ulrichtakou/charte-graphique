/**
 * Plexa One DS v5 — spacing scale (4px grid + bento gap).
 * Source: --s1..--s20 + --gap from plexa-one-design-system-v5.html.
 */

const PLEXA_PREFIX = '--plexa';

export const plexaSpacing = {
  s1: '4px',
  s2: '8px',
  s3: '12px',
  s4: '16px',
  s5: '20px',
  s6: '24px',
  s8: '32px',
  s10: '40px',
  s12: '48px',
  s16: '64px',
  s20: '80px',
  gap: '14px',
} as const;

export type PlexaSpacingToken = keyof typeof plexaSpacing;

export function plexaSpacingCssVar(token: PlexaSpacingToken): string {
  if (token === 'gap') return `${PLEXA_PREFIX}-gap`;
  return `${PLEXA_PREFIX}-${token}`;
}

export function plexaSpacingToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(plexaSpacing) as PlexaSpacingToken[]) {
    style[plexaSpacingCssVar(key)] = plexaSpacing[key];
  }
  return style;
}

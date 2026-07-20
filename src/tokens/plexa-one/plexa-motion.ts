/**
 * Plexa One DS v5 — motion tokens.
 * Source: --t-fast / --t-base / --t-slow / --t-spring / --t-smooth.
 */

const PLEXA_PREFIX = '--plexa-t';

export const plexaMotion = {
  fast: '120ms ease',
  base: '220ms ease',
  slow: '380ms ease',
  spring: '320ms cubic-bezier(.34,1.56,.64,1)',
  smooth: '400ms cubic-bezier(.4,0,.2,1)',
} as const;

export type PlexaMotionToken = keyof typeof plexaMotion;

export function plexaMotionCssVar(token: PlexaMotionToken): string {
  return `${PLEXA_PREFIX}-${token}`;
}

export function plexaMotionToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(plexaMotion) as PlexaMotionToken[]) {
    style[plexaMotionCssVar(key)] = plexaMotion[key];
  }
  return style;
}

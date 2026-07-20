/**
 * Plexa One DS v5 — typography tokens.
 * Source: --font-display / --font-body / --font-mono from plexa-one-design-system-v5.html.
 *
 * Artific (display) is fallback-aware: if not loaded, Inter weight 700 with tight tracking
 * produces a comparable result.
 */

const PLEXA_PREFIX = '--plexa-font';

export const plexaFontFamily = {
  display: `'Artific','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif`,
  body: `'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif`,
  mono: `'DM Mono',ui-monospace,Menlo,monospace`,
} as const;

export type PlexaFontFamilyToken = keyof typeof plexaFontFamily;

export function plexaFontFamilyCssVar(token: PlexaFontFamilyToken): string {
  return `${PLEXA_PREFIX}-${token}`;
}

export function plexaFontFamilyToStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of Object.keys(plexaFontFamily) as PlexaFontFamilyToken[]) {
    style[plexaFontFamilyCssVar(key)] = plexaFontFamily[key];
  }
  return style;
}

/** Hero / display sizes used by .cell-title / .hero-num in v5. */
export const plexaDisplayScale = {
  cellTitle: { fontSize: '1.6rem', lineHeight: 1.1, letterSpacing: '-0.03em' },
  cellTitleXl: {
    fontSize: 'clamp(2.4rem,4vw,3.8rem)',
    lineHeight: 1,
    letterSpacing: '-0.04em',
  },
  heroNum: {
    fontSize: 'clamp(2.8rem,5vw,4.2rem)',
    lineHeight: 1,
    letterSpacing: '-0.05em',
  },
} as const;

/** Mono labels (DM Mono uppercase, .14em tracking). */
export const plexaMonoLabel = {
  fontFamily: plexaFontFamily.mono,
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.14em',
  fontWeight: 500,
};

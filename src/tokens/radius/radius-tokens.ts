/**
 * Border-radius tokens — aligned with the spacing grid (4px @ 16px root) and rem units.
 * Nested surfaces: use `nestedRadius(outer, padding)` so inner radius = outer − padding (concentric corners).
 */

import {
  spacing,
  type SpacingToken,
} from '../spacing/spacing-tokens';

const RADIUS_PREFIX = '--sparing-radius';

/**
 * Five curvature steps (+ `none`). Values mirror spacing steps where possible
 * (xs→spacing 1, sm→2, md→3, lg→4) for predictable pairing with padding.
 */
export const radii = {
  none: '0',
  /** 0.25rem (4px) — dense controls, inline fields */
  xs: '0.25rem',
  /** 0.5rem (8px) — default buttons, list rows, compact surfaces */
  sm: '0.5rem',
  /** 0.75rem (12px) — cards, popovers, medium panels */
  md: '0.75rem',
  /** 1rem (16px) — modals, drawers, large cards */
  lg: '1rem',
  /** Pill / circle — chips, avatars, toggle tracks (nested: often same token or `nestedRadius`) */
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radii;

const ORDERED_RADIUS_KEYS: RadiusToken[] = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'full',
];

export function radiusKeysInOrder(): RadiusToken[] {
  return [...ORDERED_RADIUS_KEYS];
}

/** ~px at 16px root for docs (full is not a fixed px) */
export const radiusPxAt16Root: Partial<Record<RadiusToken, number>> = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
};

/** CSS variable name, e.g. `--sparing-radius-md` */
export function radiusCssVar(token: RadiusToken): string {
  return `${RADIUS_PREFIX}-${token}`;
}

export function radiusRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of ORDERED_RADIUS_KEYS) {
    style[radiusCssVar(key)] = radii[key];
  }
  return style;
}

/**
 * Inner border-radius for a surface inset with `padding` inside an `outer` rounded parent.
 * Resolves to `max(0px, calc(outer - padding))` so corners stay concentric.
 */
export function nestedRadius(
  outer: RadiusToken,
  padding: SpacingToken,
): string {
  if (outer === 'none') {
    return radii.none;
  }
  const pad = spacing[padding];
  if (pad === '0') {
    return radii[outer];
  }
  return `max(0px, calc(${radii[outer]} - ${pad}))`;
}

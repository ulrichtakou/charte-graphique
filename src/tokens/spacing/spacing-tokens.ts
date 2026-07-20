/**
 * Spacing scale — margin, padding, gap, and layout inset.
 * Steps follow a 4px grid at a 16px root (1 = 0.25rem = 4px), plus hairline and half steps.
 */

const SPACING_PREFIX = '--sparing-spacing';

/**
 * Values are CSS lengths (rem or px). Numeric keys mirror common utility scales.
 */
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const;

export type SpacingToken = keyof typeof spacing;

/** Approximate px at 16px root (for docs); `px` and non-rem values omitted. */
export const spacingPxAt16Root: Partial<Record<SpacingToken, number>> = {
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
};

const ORDERED_SPACING_KEYS: SpacingToken[] = [
  0,
  'px',
  0.5,
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  14,
  16,
  20,
  24,
  32,
];

export function spacingKeysInOrder(): SpacingToken[] {
  return [...ORDERED_SPACING_KEYS];
}

/** CSS variable name for a spacing step, e.g. `--sparing-spacing-4` */
export function spacingCssVar(token: SpacingToken): string {
  const suffix =
    typeof token === 'number' ? String(token).replace('.', '-') : String(token);
  return `${SPACING_PREFIX}-${suffix}`;
}

/** Inline style object with all spacing custom properties (for :root or a provider). */
export function spacingRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of ORDERED_SPACING_KEYS) {
    style[spacingCssVar(key)] = spacing[key];
  }
  return style;
}

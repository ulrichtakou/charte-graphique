/**
 * Design system primitive colors — per-hue palette from lightest (50) to darkest (950).
 * Semantic and component layers will map to these values.
 */

export const COLOR_SCALE_STEPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export type ColorScaleStep = (typeof COLOR_SCALE_STEPS)[number];

export const PRIMITIVE_HUES = [
  'blue',
  'violet',
  'green',
  'gray',
  'red',
  'yellow',
  'orange',
  'cyan',
] as const;

export type PrimitiveHue = (typeof PRIMITIVE_HUES)[number];

export type PrimitiveColorScale = Record<ColorScaleStep, string>;

export type PrimitiveColorRef = {
  hue: PrimitiveHue;
  step: ColorScaleStep;
};

/**
 * Human-readable labels for documentation (50 = lightest, 950 = darkest).
 */
export const COLOR_SCALE_STEP_LABELS: Record<ColorScaleStep, string> = {
  50: 'Lightest',
  100: 'Very light',
  200: 'Light',
  300: 'Soft',
  400: 'Moderate',
  500: 'Base',
  600: 'Moderate dark',
  700: 'Dark',
  800: 'Very dark',
  900: 'Near black',
  950: 'Darkest',
};

export const primitiveColors: Record<PrimitiveHue, PrimitiveColorScale> = {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },
};

const CSS_VAR_PREFIX = '--sparing-primitive';

export function resolvePrimitiveColor(ref: PrimitiveColorRef): string {
  return primitiveColors[ref.hue][ref.step];
}

/**
 * CSS variable name for a primitive color (e.g. `--sparing-primitive-blue-500`).
 * Inject values with `primitiveColorsToRootStyleObject`.
 */
export function primitiveColorCssVarName(
  hue: PrimitiveHue,
  step: ColorScaleStep,
): string {
  return `${CSS_VAR_PREFIX}-${hue}-${step}`;
}

/**
 * Object to spread onto `style` for a `:root` container or subtree
 * to expose colors as CSS custom properties.
 */
export function primitiveColorsToRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const hue of PRIMITIVE_HUES) {
    const scale = primitiveColors[hue];
    for (const step of COLOR_SCALE_STEPS) {
      style[primitiveColorCssVarName(hue, step)] = scale[step];
    }
  }
  return style;
}

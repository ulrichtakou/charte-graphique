/**
 * UI size tokens — control heights (spacing-aligned), icon sizes (typography-aligned),
 * and feedback elements (spinners) sized relative to the parent control.
 *
 * **Icons:** In apps and docs, use [`lucide-react`](https://lucide.dev/icons/) icons
 * and set `size`, `width`, and `height` from `iconSizes` / `iconSizeForTypeScale`
 * so glyphs track typography (peer: `lucide-react`).
 */

import { spacing } from '../spacing/spacing-tokens';
import {
  typeScale,
  type TypeScaleToken,
} from '../typography/typography-tokens';

const UI_PREFIX = '--sparing-ui';

/**
 * Four control heights for inputs, buttons, triggers — values from `spacing` (4px grid).
 * No ad-hoc px: sm→32px, md→40px, lg→44px, xl→48px @16 root.
 */
export const componentHeights = {
  /** 2rem — dense forms, data tables */
  sm: spacing[8],
  /** 2.5rem — default app UI */
  md: spacing[10],
  /** 2.75rem — comfortable touch / marketing */
  lg: spacing[11],
  /** 3rem — large touch, accessibility */
  xl: spacing[12],
} as const;

export type ComponentHeightToken = keyof typeof componentHeights;

const ORDERED_COMPONENT_HEIGHTS: ComponentHeightToken[] = [
  'sm',
  'md',
  'lg',
  'xl',
];

export function componentHeightKeysInOrder(): ComponentHeightToken[] {
  return [...ORDERED_COMPONENT_HEIGHTS];
}

/** ~px @16 root */
export const componentHeightPxAt16Root: Record<
  ComponentHeightToken,
  number
> = {
  sm: 32,
  md: 40,
  lg: 44,
  xl: 48,
};

/**
 * Icon box size follows adjacent text — values are `typeScale` font sizes (rem).
 * Use the same key as the text step you render (icons inherit the type ramp, not arbitrary px).
 */
export const iconSizes = {
  xs: typeScale.xs.fontSize,
  sm: typeScale.sm.fontSize,
  md: typeScale.base.fontSize,
  lg: typeScale.md.fontSize,
  xl: typeScale.lg.fontSize,
} as const;

export type IconSizeToken = keyof typeof iconSizes;

/** Any typography step → matching icon side length */
export function iconSizeForTypeScale(scale: TypeScaleToken): string {
  return typeScale[scale].fontSize;
}

/**
 * Suggested pairing for control + label + inline icon (single density per row).
 */
export const controlDensityPairing: Record<
  ComponentHeightToken,
  { body: TypeScaleToken; icon: IconSizeToken }
> = {
  sm: { body: 'sm', icon: 'sm' },
  md: { body: 'base', icon: 'md' },
  lg: { body: 'base', icon: 'md' },
  xl: { body: 'md', icon: 'lg' },
};

/** Diameter of a spinner/loader as a fraction of the enclosing control height */
export const spinnerToControlHeightRatio = 0.45;

/**
 * Spinner diameter tied to a control height — e.g. Lucide `Loader2` `width` / `height`,
 * or a custom ring with this as diameter.
 */
export function spinnerDiameterForComponent(
  control: ComponentHeightToken,
): string {
  return `calc(${componentHeights[control]} * ${spinnerToControlHeightRatio})`;
}

/** Ring stroke scales with spinner so it stays visible at any control size */
export function spinnerStrokeWidthForComponent(
  control: ComponentHeightToken,
): string {
  return `calc(${componentHeights[control]} * 0.08)`;
}

export function componentHeightCssVar(
  token: ComponentHeightToken,
): string {
  return `${UI_PREFIX}-component-height-${token}`;
}

export function iconSizeCssVar(token: IconSizeToken): string {
  return `${UI_PREFIX}-icon-${token}`;
}

export function uiSizesRootStyleObject(): Record<string, string> {
  const style: Record<string, string> = {};
  for (const key of ORDERED_COMPONENT_HEIGHTS) {
    style[componentHeightCssVar(key)] = componentHeights[key];
  }
  (Object.keys(iconSizes) as IconSizeToken[]).forEach((key) => {
    style[iconSizeCssVar(key)] = iconSizes[key];
  });
  return style;
}

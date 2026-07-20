import type { SxProps, Theme } from '@mui/material/styles';
import { radii } from '../../tokens/radius/radius-tokens';
import {
  primitiveColors,
  type ColorScaleStep,
  type PrimitiveHue,
} from '../../tokens/colors/primitives/primitive-colors';

const pc = primitiveColors;

/** Ton unique pour les grilles docs (aligné sur Button). */
export const ICON_TONE: ColorScaleStep = 600;

export function contrastFg(hue: PrimitiveHue, step: ColorScaleStep): string {
  if (hue === 'gray') {
    return step >= 500 ? '#ffffff' : '#0f172a';
  }
  if (step <= 400) return '#0f172a';
  return '#ffffff';
}

export function sxContained(hue: PrimitiveHue, step: ColorScaleStep): SxProps<Theme> {
  const bg = pc[hue][step];
  return {
    backgroundColor: bg,
    color: contrastFg(hue, step),
    '&:hover': {
      backgroundColor: bg,
      filter: 'brightness(0.94)',
    },
  };
}

export function sxOutlined(hue: PrimitiveHue, step: ColorScaleStep): SxProps<Theme> {
  const c = pc[hue][step];
  return {
    color: c,
    borderColor: c,
    borderWidth: 1,
    borderStyle: 'solid',
    '&:hover': {
      borderColor: c,
      backgroundColor: `${c}1a`,
    },
  };
}

export function sxText(hue: PrimitiveHue, step: ColorScaleStep): SxProps<Theme> {
  const c = pc[hue][step];
  return {
    color: c,
    '&:hover': {
      backgroundColor: `${c}14`,
    },
  };
}

export const PATTERN_VARIANT_ROWS: {
  title: string;
  variant: 'contained' | 'outlined' | 'text';
  sx: (hue: PrimitiveHue, step: ColorScaleStep) => SxProps<Theme>;
}[] = [
  { title: 'Contained', variant: 'contained', sx: sxContained },
  { title: 'Outlined', variant: 'outlined', sx: sxOutlined },
  { title: 'Text', variant: 'text', sx: sxText },
];

/** Styles pour {@link ToggleButton} dans un groupe (sélection = accent primitif). */
export function toggleButtonSx(
  visualVariant: 'contained' | 'outlined' | 'text',
  hue: PrimitiveHue,
  step: ColorScaleStep,
): SxProps<Theme> {
  const c = pc[hue][step];
  const fg = contrastFg(hue, step);
  switch (visualVariant) {
    case 'contained':
      return {
        border: `1px solid ${pc.gray[300]}`,
        color: pc.gray[800],
        '&.Mui-selected': {
          backgroundColor: c,
          color: fg,
          borderColor: c,
          '&:hover': {
            backgroundColor: c,
            filter: 'brightness(0.94)',
          },
        },
      };
    case 'outlined':
      return {
        borderColor: pc.gray[300],
        color: pc.gray[800],
        '&.Mui-selected': {
          color: c,
          borderColor: c,
          backgroundColor: `${c}22`,
        },
      };
    case 'text':
      return {
        border: 'none',
        color: pc.gray[700],
        '&.Mui-selected': {
          color: c,
          backgroundColor: `${c}18`,
        },
      };
  }
}

/** {@link IconButton} : plein / contour / ghost selon la même logique que Button. */
export function iconButtonPrimitiveSx(
  visualVariant: 'contained' | 'outlined' | 'text',
  hue: PrimitiveHue,
  step: ColorScaleStep,
): SxProps<Theme> {
  switch (visualVariant) {
    case 'contained':
      return sxContained(hue, step);
    case 'outlined':
      return {
        ...sxOutlined(hue, step),
        borderRadius: radii.sm,
      };
    case 'text':
      return sxText(hue, step);
  }
}

/** FAB circulaire / extended — couleur d’accent primitive. */
export function fabPrimitiveSx(
  visualVariant: 'contained' | 'outlined' | 'text',
  hue: PrimitiveHue,
  step: ColorScaleStep,
): SxProps<Theme> {
  const c = pc[hue][step];
  const fg = contrastFg(hue, step);
  const shadow = `0 4px 12px ${pc.gray[900]}22`;
  switch (visualVariant) {
    case 'contained':
      return {
        backgroundColor: c,
        color: fg,
        boxShadow: shadow,
        '&:hover': {
          backgroundColor: c,
          filter: 'brightness(0.94)',
        },
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        color: c,
        border: `2px solid ${c}`,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: `${c}14`,
        },
      };
    case 'text':
      return {
        backgroundColor: `${c}12`,
        color: c,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: `${c}20`,
        },
      };
  }
}

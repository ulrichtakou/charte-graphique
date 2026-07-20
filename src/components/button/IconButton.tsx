import { forwardRef } from 'react';
import MuiIconButton, {
  type IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeights,
  controlDensityPairing,
  iconSizes,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';

function sxFromDensity(density: ComponentHeightToken): SxProps<Theme> {
  const h = componentHeights[density];
  const pair = controlDensityPairing[density];
  const icon = iconSizes[pair.icon];
  return {
    width: h,
    height: h,
    minWidth: h,
    padding: spacing[2],
    borderRadius: radii.sm,
    boxSizing: 'border-box',
    '& svg': {
      width: icon,
      height: icon,
    },
  };
}

export type IconButtonProps = MuiIconButtonProps & {
  /** @default 'md' */
  density?: ComponentHeightToken;
};

/**
 * Icon-only control — square hit target aligned with `componentHeights` and Lucide icon sizes.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ density = 'md', sx, ...rest }, ref) {
    const merged: SxProps<Theme> = [
      sxFromDensity(density),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ];
    return <MuiIconButton ref={ref} sx={merged} {...rest} />;
  },
);

import { forwardRef } from 'react';
import MuiToggleButton, {
  type ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';
import MuiToggleButtonGroup, {
  type ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import type { SxProps, Theme } from '@mui/material/styles';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeights,
  controlDensityPairing,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';

function toggleSxFromDensity(density: ComponentHeightToken): SxProps<Theme> {
  const h = componentHeights[density];
  const pair = controlDensityPairing[density];
  return {
    minHeight: h,
    px: spacing[3],
    fontSize: typeScale[pair.body].fontSize,
    fontWeight: fontWeights.semibold,
    textTransform: 'none',
  };
}

export type ToggleButtonProps = MuiToggleButtonProps & {
  density?: ComponentHeightToken;
};

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function ToggleButton({ density = 'md', sx, ...rest }, ref) {
    const merged: SxProps<Theme> = [
      toggleSxFromDensity(density),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ];
    return <MuiToggleButton ref={ref} sx={merged} {...rest} />;
  },
);

export type ToggleButtonGroupProps = MuiToggleButtonGroupProps;

/**
 * Groups {@link ToggleButton}s. Use `sx` for spaced (“standard”) vs flush (“connected”) layouts.
 */
export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleButtonGroupProps
>(function ToggleButtonGroup(props, ref) {
  return <MuiToggleButtonGroup ref={ref} {...props} />;
});

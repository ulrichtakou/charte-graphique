import { forwardRef } from 'react';
import MuiFab, { type FabProps as MuiFabProps } from '@mui/material/Fab';
import type { SxProps, Theme } from '@mui/material/styles';
import { radii } from '../../tokens/radius/radius-tokens';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights } from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

export type FabSizeToken = 'sm' | 'md' | 'lg';

const FAB_SIZE: Record<FabSizeToken, 'small' | 'medium' | 'large'> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export type FabProps = Omit<MuiFabProps, 'size'> & {
  /** Maps to MUI Fab `small` | `medium` | `large` @default 'md' */
  fabSize?: FabSizeToken;
};

/**
 * Floating action — circular or `extended` (label + icon).
 */
export const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { fabSize = 'md', sx, variant = 'circular', ...rest },
  ref,
) {
  const muiSize = FAB_SIZE[fabSize];
  const merged: SxProps<Theme> = [
    {
      boxShadow: `0 4px 12px ${pc.gray[900]}22`,
      fontWeight: fontWeights.semibold,
      textTransform: 'none',
      ...(variant === 'extended' && {
        px: spacing[4],
        gap: spacing[2],
        borderRadius: radii.lg,
        minHeight: 48,
        '& .MuiFab-label': {
          px: spacing[2],
        },
      }),
    },
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ];

  return (
    <MuiFab
      ref={ref}
      size={muiSize}
      variant={variant}
      sx={merged}
      color="primary"
      {...rest}
    />
  );
});

import { forwardRef, Fragment, type ReactNode } from 'react';
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { Loader2 } from 'lucide-react';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeights,
  controlDensityPairing,
  spinnerDiameterForComponent,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';

function hasVisibleLabel(children: ReactNode): boolean {
  if (children == null) return false;
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children).trim().length > 0;
  }
  return true;
}

const PADDING_X: Record<ComponentHeightToken, string> = {
  sm: spacing[3],
  md: spacing[4],
  lg: spacing[4],
  xl: spacing[5],
};

function muiSizeFromDensity(d: ComponentHeightToken): MuiButtonProps['size'] {
  if (d === 'sm') return 'small';
  if (d === 'lg' || d === 'xl') return 'large';
  return 'medium';
}

function sxFromDensity(density: ComponentHeightToken): SxProps<Theme> {
  const pair = controlDensityPairing[density];
  return {
    minHeight: componentHeights[density],
    px: PADDING_X[density],
    gap: spacing[2],
    borderRadius: radii.sm,
    fontSize: typeScale[pair.body].fontSize,
    fontWeight: fontWeights.semibold,
    textTransform: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    '& .MuiButton-startIcon': {
      marginRight: 0,
      marginLeft: 0,
      display: 'inline-flex',
    },
    '& .MuiButton-endIcon': {
      marginLeft: 0,
      marginRight: 0,
      display: 'inline-flex',
    },
  };
}

export type SharedButtonProps = Omit<MuiButtonProps, 'children' | 'size'> & {
  children: ReactNode;
  /**
   * Vertical density — `componentHeights`, padding, type scale, and spinner size.
   * @default 'md'
   */
  density?: ComponentHeightToken;
  loading?: boolean;
  /** While loading: replaces the visible label when set; otherwise the label stays beside the spinner (`loadingPosition="start"`). */
  loadingText?: string;
  loadingPosition?: 'start' | 'center';
};

export const Button = forwardRef<HTMLButtonElement, SharedButtonProps>(
  function Button(
    {
      children,
      density = 'md',
      loading = false,
      loadingText,
      loadingPosition = 'start',
      disabled,
      startIcon,
      endIcon,
      sx,
      ...rest
    },
    ref,
  ) {
    const isDisabled = Boolean(disabled || loading);
    const spinnerPx = spinnerDiameterForComponent(density);

    const renderSpinner = (
      <Loader2
        aria-hidden
        style={{
          width: spinnerPx,
          height: spinnerPx,
          flexShrink: 0,
          animation: 'sparing-btn-spin 0.75s linear infinite',
        }}
        strokeWidth={2.25}
      />
    );

    if (
      process.env.NODE_ENV === 'development' &&
      !loading &&
      !hasVisibleLabel(children)
    ) {
      console.warn(
        '[Button] Provide non-empty text label. Icon-only buttons are not supported.',
      );
    }

    const startSlot =
      loading && loadingPosition === 'start' ? renderSpinner : startIcon;

    let body: ReactNode = children;
    if (loading) {
      if (loadingPosition === 'center') {
        body = renderSpinner;
      } else if (loadingText) {
        body = loadingText;
      } else {
        body = children;
      }
    }

    const mergedSx: SxProps<Theme> = [
      sxFromDensity(density),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ];

    return (
      <Fragment>
        <style>
          {
            '@keyframes sparing-btn-spin { to { transform: rotate(360deg); } }'
          }
        </style>
        <MuiButton
          ref={ref}
          {...rest}
          size={muiSizeFromDensity(density)}
          disabled={isDisabled}
          startIcon={startSlot}
          endIcon={loading ? undefined : endIcon}
          aria-busy={loading || undefined}
          aria-disabled={isDisabled || undefined}
          sx={mergedSx}
        >
          {body}
        </MuiButton>
      </Fragment>
    );
  },
);

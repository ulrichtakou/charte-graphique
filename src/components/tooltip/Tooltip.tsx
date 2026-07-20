import type { ReactNode } from 'react';
import {
  Box,
  Tooltip as MuiTooltip,
  type TooltipProps as MuiTooltipProps,
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  fontWeights,
  lineHeights,
  typeScale,
} from '../../tokens/typography/typography-tokens';

const pc = primitiveColors;

export type TooltipTone = 'dark' | 'light';
export type TooltipDensity = 'compact' | 'comfortable';

export type TooltipProps = Omit<MuiTooltipProps, 'slotProps'> & {
  /**
   * Surface tone. Dark is the default for high-contrast hints; light for use on dark canvases.
   */
  tone?: TooltipTone;
  /** Max width of the tooltip surface (px number or CSS length). @default 280 */
  maxWidth?: number | string;
  /** Padding scale — maps to spacing tokens. @default 'comfortable' */
  density?: TooltipDensity;
  slotProps?: MuiTooltipProps['slotProps'];
};

const DENSITY_PADDING: Record<
  TooltipDensity,
  { px: string; py: string }
> = {
  compact: { px: spacing[2], py: spacing[1.5] },
  comfortable: { px: spacing[2.5], py: spacing[2] },
};

function surfaceSx(
  tone: TooltipTone,
  maxWidth: number | string,
  density: TooltipDensity,
): SxProps<Theme> {
  const pad = DENSITY_PADDING[density];
  const maxW =
    typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;

  const dark = {
    bgcolor: pc.gray[900],
    color: '#ffffff',
    border: `1px solid ${pc.gray[800]}`,
    boxShadow: `0 4px 16px ${pc.gray[900]}55`,
  };
  const light = {
    bgcolor: pc.gray[100],
    color: pc.gray[900],
    border: `1px solid ${pc.gray[300]}`,
    boxShadow: `0 4px 16px ${pc.gray[900]}22`,
  };

  return {
    ...(tone === 'light' ? light : dark),
    maxWidth: maxW,
    px: pad.px,
    py: pad.py,
    borderRadius: radii.sm,
    fontSize: typeScale.xs.fontSize,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    textAlign: 'left',
    wordBreak: 'break-word',
  };
}

function mergeTooltipSlotProps(
  tone: TooltipTone,
  maxWidth: number | string,
  density: TooltipDensity,
  user?: MuiTooltipProps['slotProps'],
): MuiTooltipProps['slotProps'] {
  const baseSx = surfaceSx(tone, maxWidth, density);
  const userTooltip = user?.tooltip;

  if (typeof userTooltip === 'function') {
    return user;
  }

  const ttObj = (userTooltip ?? {}) as { sx?: SxProps<Theme> };
  const { sx: userSx, ...restTooltip } = ttObj;

  const mergedSx: SxProps<Theme> = [
    baseSx,
    ...(Array.isArray(userSx) ? userSx : userSx ? [userSx] : []),
  ];

  return {
    ...user,
    tooltip: {
      ...restTooltip,
      sx: mergedSx,
    },
  };
}

/**
 * Design-system tooltip built on MUI `Tooltip` with token-based surface styles.
 *
 * - **Role**: the floating label uses the browser tooltip semantics via MUI (`role="tooltip"`).
 * - **Trigger**: hover and keyboard focus on the child (when the child forwards focus).
 * - Prefer short, non-interactive `title` content; use `Popover` / `Dialog` for links and forms.
 */
export function Tooltip({
  tone = 'dark',
  maxWidth = 280,
  density = 'comfortable',
  describeChild = true,
  enterDelay = 200,
  leaveDelay = 0,
  disableInteractive = false,
  slotProps,
  ...rest
}: TooltipProps) {
  return (
    <MuiTooltip
      describeChild={describeChild}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      disableInteractive={disableInteractive}
      slotProps={mergeTooltipSlotProps(tone, maxWidth, density, slotProps)}
      {...rest}
    />
  );
}

/**
 * Wrap a disabled control so the tooltip still receives pointer events.
 */
export function TooltipDisabledWrap({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

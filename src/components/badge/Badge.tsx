import { type ReactNode } from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { resolveSemanticColor } from '../../tokens/colors/semantic/semantic-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';

export type BadgeVariant = 'solid' | 'soft' | 'outline';
export type BadgeSemantic = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeState = 'default' | 'hover' | 'press' | 'disabled';

export type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  semantic?: BadgeSemantic;
  size?: BadgeSize;
  state?: BadgeState;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  /**
   * Optional hard cap for label width.
   * Long text is truncated with ellipsis to keep dense UIs stable.
   */
  maxLabelWidth?: string | number;
};

const pc = primitiveColors;

const SIZE_STYLES: Record<
  BadgeSize,
  {
    minHeight: string;
    px: string;
    gap: string;
    fontSize: string;
    iconPx: number;
  }
> = {
  sm: {
    minHeight: spacing[5],
    px: spacing[2],
    gap: spacing[1],
    fontSize: typeScale['2xs'].fontSize,
    iconPx: 12,
  },
  md: {
    minHeight: spacing[6],
    px: spacing[2.5],
    gap: spacing[1.5],
    fontSize: typeScale.xs.fontSize,
    iconPx: 14,
  },
  lg: {
    minHeight: spacing[7],
    px: spacing[3],
    gap: spacing[2],
    fontSize: typeScale.sm.fontSize,
    iconPx: 16,
  },
};

function warningColorForState(state: BadgeState) {
  if (state === 'disabled') {
    return {
      text: pc.gray[400],
      background: pc.gray[100],
      border: pc.gray[200],
    };
  }
  if (state === 'hover') {
    return {
      text: pc.orange[900],
      background: pc.orange[200],
      border: pc.orange[500],
    };
  }
  if (state === 'press') {
    return {
      text: pc.orange[950],
      background: pc.orange[300],
      border: pc.orange[600],
    };
  }
  return {
    text: pc.orange[800],
    background: pc.orange[100],
    border: pc.orange[400],
  };
}

function semanticColors(semantic: BadgeSemantic, state: BadgeState) {
  if (semantic === 'warning') {
    return warningColorForState(state);
  }

  const role =
    semantic === 'neutral'
      ? 'neutral'
      : semantic === 'info'
        ? 'primary'
        : semantic === 'success'
          ? 'positive'
          : 'negative';

  return {
    text: resolveSemanticColor('text', role, 'accent', state),
    background: resolveSemanticColor('background', role, 'subtle', state),
    border: resolveSemanticColor('border', role, 'accent', state),
  };
}

function variantSx(
  variant: BadgeVariant,
  semantic: BadgeSemantic,
  state: BadgeState,
): SxProps<Theme> {
  const c = semanticColors(semantic, state);
  const isDisabled = state === 'disabled';

  if (variant === 'solid') {
    return {
      color: semantic === 'warning' ? c.text : '#ffffff',
      backgroundColor: isDisabled ? c.background : c.border,
      border: `1px solid ${isDisabled ? c.border : c.border}`,
    };
  }

  if (variant === 'outline') {
    return {
      color: c.text,
      backgroundColor: isDisabled ? pc.gray[50] : 'transparent',
      border: `1px solid ${c.border}`,
    };
  }

  return {
    color: c.text,
    backgroundColor: c.background,
    border: `1px solid transparent`,
  };
}

export function badgeIconSize(size: BadgeSize): number {
  return SIZE_STYLES[size].iconPx;
}

export const Badge = ({
  label,
  variant = 'soft',
  semantic = 'neutral',
  size = 'md',
  state = 'default',
  startIcon,
  endIcon,
  maxLabelWidth,
}: BadgeProps) => {
  const s = SIZE_STYLES[size];

  return (
    <Box
      component="span"
      aria-disabled={state === 'disabled' || undefined}
      sx={{
        ...variantSx(variant, semantic, state),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: s.minHeight,
        px: s.px,
        gap: s.gap,
        borderRadius: radii.full,
        fontWeight: fontWeights.medium,
        fontSize: s.fontSize,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        userSelect: 'none',
        '& .shared-ui-badge-icon': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 0,
        },
        '& .shared-ui-badge-label': {
          display: 'inline-block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: maxLabelWidth ?? 'none',
        },
      }}
    >
      {startIcon ? <span className="shared-ui-badge-icon">{startIcon}</span> : null}
      <span className="shared-ui-badge-label">{label}</span>
      {endIcon ? <span className="shared-ui-badge-icon">{endIcon}</span> : null}
    </Box>
  );
};

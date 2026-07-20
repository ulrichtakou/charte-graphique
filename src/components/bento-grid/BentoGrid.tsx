import { Box, type BoxProps } from '@mui/material';
import { forwardRef, type ReactNode } from 'react';

export type BentoGridProps = Omit<BoxProps, 'children'> & {
  children: ReactNode;
  /** Gap override in pixels (defaults to the v5 14px). */
  gap?: number;
};

/**
 * 12-column CSS grid bento system mirroring `.bento` from the v5 spec.
 * Cells use `BentoCell` with span 1..12 to control width.
 */
export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  function BentoGrid({ children, gap, sx, ...rest }, ref) {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: gap != null ? `${gap}px` : 'var(--plexa-gap)',
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

export type BentoCellPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type BentoCellVariant = 'default' | 'hover' | 'accent' | 'mono' | 'dark';

export type BentoCellProps = Omit<BoxProps, 'children'> & {
  /** Column span 1..12 — uses object form for responsive overrides. */
  span?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  /** Row span (1..3). */
  rowSpan?: number;
  padding?: BentoCellPadding;
  variant?: BentoCellVariant;
  children?: ReactNode;
  onClick?: () => void;
};

const PADDING_MAP: Record<BentoCellPadding, string | number> = {
  none: 0,
  sm: 'var(--plexa-s4)',
  md: 'var(--plexa-s6)',
  lg: 'var(--plexa-s8)',
  xl: 'calc(var(--plexa-s10) + 0px) var(--plexa-s8)',
};

function buildSpanSx(
  span: BentoCellProps['span'],
): Record<string, string | number> {
  if (typeof span === 'number') {
    return { gridColumn: `span ${span}` };
  }
  if (!span) return { gridColumn: 'span 12' };
  const sx: Record<string, string | number> = {};
  if (span.xs) sx.gridColumn = `span ${span.xs}`;
  // additional breakpoints via media queries — MUI takes them through theme.breakpoints
  return sx;
}

export const BentoCell = forwardRef<HTMLDivElement, BentoCellProps>(
  function BentoCell(
    {
      span = 12,
      rowSpan,
      padding = 'md',
      variant = 'default',
      children,
      onClick,
      sx,
      ...rest
    },
    ref,
  ) {
    const interactive = variant === 'hover' || Boolean(onClick);
    const variantStyles =
      variant === 'accent'
        ? {
            background: 'var(--plexa-primary-faint)',
            borderColor: 'var(--plexa-primary-glow)',
          }
        : variant === 'mono'
          ? { background: 'var(--plexa-bg2)' }
          : variant === 'dark'
            ? { background: 'var(--plexa-bg3)' }
            : { background: 'var(--plexa-bg-raised)' };

    return (
      <Box
        ref={ref}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        sx={{
          ...buildSpanSx(span),
          ...(rowSpan ? { gridRow: `span ${rowSpan}` } : {}),
          ...variantStyles,
          border: '1px solid var(--plexa-border)',
          borderRadius: 'var(--plexa-r-xl)',
          padding: PADDING_MAP[padding as BentoCellPadding],
          position: 'relative',
          overflow: 'hidden',
          transition:
            'border-color var(--plexa-t-base), box-shadow var(--plexa-t-base)',
          ...(interactive && {
            cursor: 'pointer',
            transition:
              'transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, border-color .3s ease',
            '&:hover': {
              transform: 'translateY(-4px) scale(1.015)',
              borderColor: 'var(--plexa-primary)',
              boxShadow: 'var(--plexa-shadow-card)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'var(--plexa-primary)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform .35s var(--plexa-t-smooth)',
            },
            '&:hover::before': { transform: 'scaleX(1)' },
          }),
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

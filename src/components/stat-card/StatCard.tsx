import { Box, Typography } from '@mui/material';
import { forwardRef, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export type StatCardProps = {
  label: string;
  value: ReactNode;
  delta?: {
    value: string;
    direction: 'up' | 'down';
  };
  icon?: ReactNode;
  onClick?: () => void;
};

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  function StatCard({ label, value, delta, icon, onClick }, ref) {
    const interactive = Boolean(onClick);
    return (
      <Box
        ref={ref}
        onClick={onClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        sx={{
          background: 'var(--plexa-bg-raised)',
          border: '1px solid var(--plexa-border)',
          borderRadius: 'var(--plexa-r-xl)',
          padding: '20px 24px',
          cursor: interactive ? 'pointer' : 'default',
          transition:
            'transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, border-color .3s ease',
          ...(interactive && {
            '&:hover': {
              transform: 'translateY(-4px) scale(1.015)',
              borderColor: 'var(--plexa-primary)',
              boxShadow: 'var(--plexa-shadow-card)',
            },
          }),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: 'var(--plexa-font-mono)',
                fontSize: 11,
                color: 'var(--plexa-text3)',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                display: 'block',
                mb: 1.5,
              }}
            >
              {label}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: 'var(--plexa-font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--plexa-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                display: 'block',
                mb: '6px',
                transition: 'color var(--plexa-t-slow)',
              }}
            >
              {value}
            </Typography>
            {delta && (
              <Box
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  color:
                    delta.direction === 'up'
                      ? 'var(--plexa-success)'
                      : 'var(--plexa-danger)',
                }}
              >
                {delta.direction === 'up' ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {delta.value}
              </Box>
            )}
          </Box>
          {icon && (
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 'var(--plexa-r-md)',
                background: 'var(--plexa-primary-faint)',
                color: 'var(--plexa-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {icon}
            </Box>
          )}
        </Box>
      </Box>
    );
  },
);

import { Box, Typography } from '@mui/material';
import { forwardRef, type ReactNode } from 'react';

export type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  body?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  href?: string;
};

export const InfoCard = forwardRef<HTMLElement, InfoCardProps>(
  function InfoCard({ icon, title, body, footer, onClick, href }, ref) {
    const Component = href ? 'a' : 'div';
    const interactive = Boolean(onClick || href);
    return (
      <Box
        ref={ref as never}
        component={Component}
        href={href}
        onClick={onClick}
        role={onClick && !href ? 'button' : undefined}
        tabIndex={onClick && !href ? 0 : undefined}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--plexa-bg-raised)',
          border: '1px solid var(--plexa-border)',
          borderRadius: 'var(--plexa-r-xl)',
          padding: '24px',
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          cursor: interactive ? 'pointer' : 'default',
          transition:
            'transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, border-color .3s ease',
          willChange: interactive ? 'transform' : undefined,
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
            transition:
              'transform .35s var(--plexa-t-smooth), background var(--plexa-t-slow)',
          },
          ...(interactive && {
            '&:hover': {
              transform: 'translateY(-6px) scale(1.02)',
              borderColor: 'var(--plexa-primary)',
              boxShadow: 'var(--plexa-shadow-card)',
            },
            '&:hover::before': { transform: 'scaleX(1)' },
          }),
        }}
      >
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
              mb: 2,
            }}
          >
            {icon}
          </Box>
        )}
        <Typography
          component="span"
          sx={{
            fontFamily: 'var(--plexa-font-display)',
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--plexa-text1)',
            letterSpacing: '-0.02em',
            mb: 1,
          }}
        >
          {title}
        </Typography>
        {body && (
          <Typography
            component="span"
            sx={{
              fontSize: 13,
              color: 'var(--plexa-text2)',
              lineHeight: 1.6,
            }}
          >
            {body}
          </Typography>
        )}
        {footer && (
          <Box
            sx={{
              mt: 2.5,
              pt: 2,
              borderTop: '1px solid var(--plexa-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {footer}
          </Box>
        )}
      </Box>
    );
  },
);

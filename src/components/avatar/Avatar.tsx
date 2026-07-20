import { Box, type BoxProps } from '@mui/material';
import { forwardRef, type ReactNode } from 'react';

export type PlexaAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PlexaAvatarVariant = 'primary' | 'blue' | 'neutral';

export type PlexaAvatarProps = Omit<BoxProps, 'children'> & {
  size?: PlexaAvatarSize;
  variant?: PlexaAvatarVariant;
  initials?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
};

const SIZE_MAP: Record<
  PlexaAvatarSize,
  { dimension: number; fontSize: number }
> = {
  xs: { dimension: 24, fontSize: 9 },
  sm: { dimension: 32, fontSize: 11 },
  md: { dimension: 40, fontSize: 14 },
  lg: { dimension: 52, fontSize: 18 },
  xl: { dimension: 64, fontSize: 22 },
};

const VARIANT_BG: Record<PlexaAvatarVariant, string> = {
  primary: 'var(--plexa-primary-faint)',
  blue: 'var(--plexa-blue-faint)',
  neutral: 'var(--plexa-bg3)',
};

const VARIANT_FG: Record<PlexaAvatarVariant, string> = {
  primary: 'var(--plexa-primary)',
  blue: 'var(--plexa-info-dark)',
  neutral: 'var(--plexa-text2)',
};

export const PlexaAvatar = forwardRef<HTMLDivElement, PlexaAvatarProps>(
  function PlexaAvatar(
    {
      size = 'md',
      variant = 'primary',
      initials,
      src,
      alt,
      children,
      sx,
      ...rest
    },
    ref,
  ) {
    const { dimension, fontSize } = SIZE_MAP[size];
    return (
      <Box
        ref={ref}
        role={src ? 'img' : undefined}
        aria-label={alt}
        sx={{
          width: dimension,
          height: dimension,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--plexa-font-display)',
          fontWeight: 700,
          fontSize,
          color: VARIANT_FG[variant],
          background: VARIANT_BG[variant],
          border: '2px solid var(--plexa-bg2)',
          flexShrink: 0,
          overflow: 'hidden',
          ...sx,
        }}
        {...rest}
      >
        {src ? (
          <Box
            component="img"
            src={src}
            alt={alt ?? ''}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          children ?? initials
        )}
      </Box>
    );
  },
);

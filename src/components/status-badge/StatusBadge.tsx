import { Chip, type ChipProps } from '@mui/material';

export type StatusBadgeTone = 'neutral' | 'success' | 'warning' | 'error' | 'info';

export type StatusBadgeLegacyVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

export type StatusBadgeProps = {
  label: string;
  tone?: StatusBadgeTone;
  /** @deprecated use `tone` */
  variant?: StatusBadgeLegacyVariant;
  size?: ChipProps['size'];
};

const legacyVariantToTone = (v: StatusBadgeLegacyVariant): StatusBadgeTone => {
  if (v === 'default') return 'neutral';
  return v;
};

const toneToChipColor: Record<
  StatusBadgeTone,
  'success' | 'warning' | 'error' | 'info' | 'default'
> = {
  neutral: 'default',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

export const StatusBadge = ({
  label,
  tone,
  variant = 'default',
  size = 'small',
}: StatusBadgeProps) => {
  const effectiveTone = tone ?? legacyVariantToTone(variant);

  return (
    <Chip
      label={label}
      color={toneToChipColor[effectiveTone]}
      size={size}
      sx={{
        borderRadius: '9999px',
        fontWeight: 500,
        fontSize: '11px',
        height: 25,
        '& .MuiChip-label': {
          px: 1,
        },
      }}
    />
  );
};

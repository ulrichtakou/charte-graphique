import { Chip, useTheme, type SxProps, type Theme } from '@mui/material';
import {
  yaoundeLogisListingStatus,
  type YaoundeLogisListingStatusKey,
} from '../../tokens/yaoundelogis/brand-foundation';
import { yaoundeLogisListingStatusDark } from '../../tokens/yaoundelogis/surface-tokens';

export type ListingStatusBadgeProps = {
  status: YaoundeLogisListingStatusKey;
  /** Surcharge le libellé métier par défaut */
  label?: string;
  size?: 'small' | 'medium';
  sx?: SxProps<Theme>;
};

/**
 * Badge d’état d’annonce — clair / sombre selon le thème MUI actif.
 */
export function ListingStatusBadge({
  status,
  label,
  size = 'small',
  sx,
}: ListingStatusBadgeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const token = isDark
    ? yaoundeLogisListingStatusDark[status]
    : yaoundeLogisListingStatus[status];
  const text = label ?? token.label;

  return (
    <Chip
      label={text}
      size={size}
      sx={{
        bgcolor: token.background,
        color: token.text,
        border: `1px solid ${token.border}`,
        fontWeight: status === 'nouveau' ? 700 : 600,
        borderRadius: '9999px',
        ...sx,
      }}
    />
  );
}

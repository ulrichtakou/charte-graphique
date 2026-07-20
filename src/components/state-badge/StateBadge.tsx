import { type ReactNode } from 'react';
import { Badge, badgeIconSize, type BadgeSemantic, type BadgeVariant } from '../badge/Badge';

export type StateBadgeProps = {
  label: string;
  icon: ReactNode;
  semantic?: BadgeSemantic;
  variant?: BadgeVariant;
};

export const StateBadge = ({
  label,
  icon,
  semantic = 'neutral',
  variant = 'outline',
}: StateBadgeProps) => (
  <Badge
    label={label}
    semantic={semantic}
    variant={variant}
    size="sm"
    startIcon={icon}
  />
);

export { badgeIconSize };

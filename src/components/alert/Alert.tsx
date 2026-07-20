import { type ReactNode } from 'react';
import { Box, IconButton } from '@mui/material';
import { Bell, CheckCircle2, CircleAlert, Info, X, type LucideIcon } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, textStateColors, typeScale } from '../../tokens/typography/typography-tokens';

export type AlertSemantic = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export type AlertVariant = 'soft' | 'outline' | 'solid';
export type AlertLayout = 'single-line' | 'multiline';

export type AlertProps = {
  title?: string;
  message: string;
  semantic?: AlertSemantic;
  variant?: AlertVariant;
  layout?: AlertLayout;
  showIcon?: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;
  linkLabel?: string;
  onLinkClick?: () => void;
  /** Close is mandatory for Alert by design rules. */
  onClose: () => void;
  closeLabel?: string;
};

const pc = primitiveColors;

const ICON_BY_SEMANTIC: Record<AlertSemantic, LucideIcon> = {
  info: Info,
  success: CheckCircle2,
  warning: Bell,
  danger: CircleAlert,
  neutral: Info,
};

function semanticColors(semantic: AlertSemantic) {
  if (semantic === 'success') return { bg: pc.green[100], fg: pc.green[800], border: pc.green[400] };
  if (semantic === 'warning') return { bg: pc.orange[100], fg: pc.orange[800], border: pc.orange[400] };
  if (semantic === 'danger') return { bg: pc.red[100], fg: pc.red[800], border: pc.red[400] };
  if (semantic === 'info') return { bg: pc.blue[100], fg: pc.blue[800], border: pc.blue[400] };
  return { bg: pc.gray[100], fg: pc.gray[800], border: pc.gray[400] };
}

function variantStyle(variant: AlertVariant, semantic: AlertSemantic) {
  const c = semanticColors(semantic);
  if (variant === 'solid') {
    return {
      backgroundColor: c.border,
      color: semantic === 'warning' ? pc.orange[950] : '#ffffff',
      border: `1px solid ${c.border}`,
    };
  }
  if (variant === 'outline') {
    return {
      backgroundColor: '#ffffff',
      color: c.fg,
      border: `1px solid ${c.border}`,
    };
  }
  return {
    backgroundColor: c.bg,
    color: c.fg,
    border: '1px solid transparent',
  };
}

function ActionButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  if (!children) return null;
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        border: 'none',
        background: 'transparent',
        p: 0,
        cursor: 'pointer',
        color: 'inherit',
        fontWeight: fontWeights.semibold,
        fontSize: typeScale.xs.fontSize,
        textDecoration: 'underline',
      }}
    >
      {children}
    </Box>
  );
}

export const Alert = ({
  title,
  message,
  semantic = 'info',
  variant = 'soft',
  layout = 'multiline',
  showIcon = true,
  ctaLabel,
  onCtaClick,
  linkLabel,
  onLinkClick,
  onClose,
  closeLabel = 'Close alert',
}: AlertProps) => {
  const Icon = ICON_BY_SEMANTIC[semantic];
  const singleLine = layout === 'single-line';

  return (
    <Box
      role={semantic === 'danger' || semantic === 'warning' ? 'alert' : 'status'}
      aria-live={semantic === 'danger' || semantic === 'warning' ? 'assertive' : 'polite'}
      sx={{
        ...variantStyle(variant, semantic),
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: spacing[2],
        borderRadius: radii.md,
        px: spacing[3],
        py: spacing[2.5],
        alignItems: singleLine ? 'center' : 'start',
      }}
    >
      <Box sx={{ width: 18, height: 18, mt: singleLine ? 0 : spacing[0.5] }}>
        {showIcon ? <Icon size={18} aria-hidden strokeWidth={2.1} /> : null}
      </Box>

      <Box sx={{ display: 'grid', gap: spacing[1] }}>
        {title ? (
          <Box sx={{ fontSize: typeScale.sm.fontSize, fontWeight: fontWeights.semibold }}>{title}</Box>
        ) : null}
        <Box sx={{ fontSize: typeScale.sm.fontSize, color: 'inherit' }}>{message}</Box>
        {(ctaLabel || linkLabel) && !singleLine ? (
          <Box sx={{ display: 'flex', gap: spacing[2] }}>
            {ctaLabel ? <ActionButton onClick={onCtaClick}>{ctaLabel}</ActionButton> : null}
            {linkLabel ? <ActionButton onClick={onLinkClick}>{linkLabel}</ActionButton> : null}
          </Box>
        ) : null}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'start', gap: spacing[2] }}>
        {(ctaLabel || linkLabel) && singleLine ? (
          <Box sx={{ display: 'flex', gap: spacing[2], alignItems: 'center' }}>
            {ctaLabel ? <ActionButton onClick={onCtaClick}>{ctaLabel}</ActionButton> : null}
            {linkLabel ? <ActionButton onClick={onLinkClick}>{linkLabel}</ActionButton> : null}
          </Box>
        ) : null}
        <IconButton
          size="small"
          aria-label={closeLabel}
          onClick={onClose}
          sx={{ color: 'inherit', mt: '-2px' }}
        >
          <X size={16} aria-hidden />
        </IconButton>
      </Box>
    </Box>
  );
};

export const alertContentGuidance = {
  title: 'Keep title short and action-oriented',
  message: 'Prefer one clear message; move long explanations to surrounding content',
  accessibility: `Use role="alert" only for urgent contexts`,
  usage: 'Use inline for contextual feedback; banner for cross-page announcements',
  noteColor: textStateColors.secondary,
};

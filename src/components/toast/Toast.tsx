import { useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { CheckCircle2, CircleAlert, Info, X, type LucideIcon } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { radii } from '../../tokens/radius/radius-tokens';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';

export type ToastSemantic = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export type ToastVariant = 'soft' | 'outline' | 'solid';

export type ToastProps = {
  title?: string;
  message: string;
  semantic?: ToastSemantic;
  variant?: ToastVariant;
  showIcon?: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;
  linkLabel?: string;
  onLinkClick?: () => void;
  onClose?: () => void;
  autoDismissMs?: number;
  pauseOnHover?: boolean;
};

const pc = primitiveColors;

const ICON_BY_SEMANTIC: Record<ToastSemantic, LucideIcon> = {
  info: Info,
  success: CheckCircle2,
  warning: CircleAlert,
  danger: CircleAlert,
  neutral: Info,
};

function semanticColors(semantic: ToastSemantic) {
  if (semantic === 'success') return { bg: pc.green[100], fg: pc.green[800], border: pc.green[400] };
  if (semantic === 'warning') return { bg: pc.orange[100], fg: pc.orange[800], border: pc.orange[400] };
  if (semantic === 'danger') return { bg: pc.red[100], fg: pc.red[800], border: pc.red[400] };
  if (semantic === 'info') return { bg: pc.blue[100], fg: pc.blue[800], border: pc.blue[400] };
  return { bg: pc.gray[100], fg: pc.gray[800], border: pc.gray[400] };
}

function variantStyle(variant: ToastVariant, semantic: ToastSemantic) {
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

export const Toast = ({
  title,
  message,
  semantic = 'info',
  variant = 'soft',
  showIcon = true,
  ctaLabel,
  onCtaClick,
  linkLabel,
  onLinkClick,
  onClose,
  autoDismissMs,
  pauseOnHover = true,
}: ToastProps) => {
  useEffect(() => {
    if (!autoDismissMs || !onClose) return;
    const t = window.setTimeout(() => onClose(), autoDismissMs);
    return () => window.clearTimeout(t);
  }, [autoDismissMs, onClose]);

  const Icon = ICON_BY_SEMANTIC[semantic];

  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        ...variantStyle(variant, semantic),
        width: 360,
        maxWidth: '100%',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: spacing[2],
        borderRadius: radii.md,
        px: spacing[3],
        py: spacing[2.5],
        boxShadow: `0 10px 24px ${pc.gray[900]}22`,
        ...(pauseOnHover && {
          transition: 'transform 120ms ease',
          '&:hover': { transform: 'translateY(-1px)' },
        }),
      }}
    >
      <Box sx={{ width: 18, height: 18, mt: spacing[0.5] }}>
        {showIcon ? <Icon size={18} aria-hidden strokeWidth={2.1} /> : null}
      </Box>

      <Box sx={{ display: 'grid', gap: spacing[1] }}>
        {title ? (
          <Box sx={{ fontSize: typeScale.sm.fontSize, fontWeight: fontWeights.semibold }}>{title}</Box>
        ) : null}
        <Box sx={{ fontSize: typeScale.sm.fontSize }}>{message}</Box>
        {(ctaLabel || linkLabel) ? (
          <Box sx={{ display: 'flex', gap: spacing[2] }}>
            {ctaLabel ? (
              <Box
                component="button"
                type="button"
                onClick={onCtaClick}
                sx={{
                  border: 'none',
                  background: 'transparent',
                  color: 'inherit',
                  p: 0,
                  cursor: 'pointer',
                  fontWeight: fontWeights.semibold,
                  textDecoration: 'underline',
                  fontSize: typeScale.xs.fontSize,
                }}
              >
                {ctaLabel}
              </Box>
            ) : null}
            {linkLabel ? (
              <Box
                component="button"
                type="button"
                onClick={onLinkClick}
                sx={{
                  border: 'none',
                  background: 'transparent',
                  color: 'inherit',
                  p: 0,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: typeScale.xs.fontSize,
                }}
              >
                {linkLabel}
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Box>

      {onClose ? (
        <IconButton size="small" aria-label="Close toast" onClick={onClose} sx={{ color: 'inherit' }}>
          <X size={16} aria-hidden />
        </IconButton>
      ) : (
        <Box />
      )}
    </Box>
  );
};

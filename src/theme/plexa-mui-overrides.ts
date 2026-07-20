import type { Components, Theme } from '@mui/material/styles';

/**
 * MUI component overrides that mirror Plexa One DS v5 stylings.
 * Reads from CSS custom properties (`--plexa-*`) so a single ThemeProvider
 * stays in sync with the theme toggle (data-theme on documentElement).
 */
export const plexaComponentOverrides: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: false,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        fontFamily: 'var(--plexa-font-body)',
        fontSize: '14px',
        borderRadius: 'var(--plexa-r-md)',
        padding: '9px 20px',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        transition: 'all var(--plexa-t-fast)',
        '&:active': { transform: 'scale(0.97)' },
        '&.Mui-disabled': { opacity: 0.35, pointerEvents: 'none' },
      },
      sizeSmall: {
        fontSize: '13px',
        padding: '7px 16px',
        borderRadius: 'var(--plexa-r-sm)',
      },
      sizeLarge: {
        fontSize: '15px',
        padding: '12px 32px',
        borderRadius: 'var(--plexa-r-lg)',
      },
      contained: {
        background: 'var(--plexa-primary)',
        color: 'var(--plexa-text-inv)',
        borderColor: 'var(--plexa-primary)',
        fontWeight: 600,
        '&:hover': {
          background: 'var(--plexa-primary-dim)',
          borderColor: 'var(--plexa-primary-dim)',
          boxShadow: '0 0 20px var(--plexa-primary-glow)',
        },
        '&.Mui-disabled': {
          background: 'var(--plexa-primary)',
          color: 'var(--plexa-text-inv)',
        },
      },
      outlined: {
        background: 'transparent',
        color: 'var(--plexa-primary)',
        borderColor: 'var(--plexa-primary)',
        '&:hover': {
          background: 'var(--plexa-primary-faint)',
          borderColor: 'var(--plexa-primary)',
          boxShadow: '0 0 20px var(--plexa-primary-glow)',
        },
      },
      text: {
        background: 'transparent',
        color: 'var(--plexa-text2)',
        '&:hover': {
          background: 'var(--plexa-bg3)',
          color: 'var(--plexa-text1)',
        },
      },
      containedError: {
        background: 'transparent',
        color: 'var(--plexa-danger)',
        borderColor: 'rgba(245,64,90,.35)',
        '&:hover': {
          background: 'var(--plexa-danger-faint)',
          borderColor: 'var(--plexa-danger)',
          boxShadow: 'none',
        },
      },
      outlinedError: {
        color: 'var(--plexa-danger)',
        borderColor: 'rgba(245,64,90,.35)',
        '&:hover': {
          background: 'var(--plexa-danger-faint)',
          borderColor: 'var(--plexa-danger)',
          boxShadow: 'none',
        },
      },
      textError: {
        color: 'var(--plexa-danger)',
        '&:hover': {
          background: 'var(--plexa-danger-faint)',
          color: 'var(--plexa-danger)',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: 'var(--plexa-text2)',
        transition: 'all var(--plexa-t-fast)',
        '&:hover': {
          background: 'var(--plexa-primary-faint)',
          color: 'var(--plexa-primary)',
        },
      },
    },
  },
  MuiCard: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        background: 'var(--plexa-bg-raised)',
        border: '1px solid var(--plexa-border)',
        borderRadius: 'var(--plexa-r-xl)',
        boxShadow: 'none',
        transition:
          'border-color var(--plexa-t-base), box-shadow var(--plexa-t-base)',
      },
    },
  },
  MuiPaper: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        borderRadius: 'var(--plexa-r-lg)',
      },
    },
  },
  MuiAppBar: {
    defaultProps: { elevation: 0, color: 'default' },
    styleOverrides: {
      root: {
        background: 'var(--plexa-nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--plexa-border)',
        color: 'var(--plexa-text1)',
        boxShadow: 'none',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: 'var(--plexa-bg2)',
        borderColor: 'var(--plexa-border)',
        backgroundImage: 'none',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        background: 'var(--plexa-bg2)',
        borderRadius: 'var(--plexa-r-md)',
        transition:
          'border-color var(--plexa-t-fast), background var(--plexa-t-fast), box-shadow var(--plexa-t-fast)',
        '& fieldset': {
          borderColor: 'var(--plexa-border-mid)',
          borderWidth: '1.5px',
        },
        '&:hover fieldset': {
          borderColor: 'var(--plexa-border-hi)',
        },
        '&.Mui-focused': {
          background: 'var(--plexa-bg)',
          boxShadow: '0 0 0 3px var(--plexa-primary-faint)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'var(--plexa-primary) !important',
          borderWidth: '1.5px !important',
        },
        '&.Mui-error fieldset': { borderColor: 'var(--plexa-danger)' },
        '&.Mui-error.Mui-focused': {
          boxShadow: '0 0 0 3px var(--plexa-danger-faint)',
        },
      },
      input: {
        color: 'var(--plexa-text1)',
        '&::placeholder': { color: 'var(--plexa-text3)', opacity: 1 },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'var(--plexa-text3)',
        '&.Mui-focused': { color: 'var(--plexa-primary)' },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        color: 'var(--plexa-text3)',
        '&.Mui-error': { color: 'var(--plexa-danger)' },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        height: 'auto',
        fontSize: '11px',
        fontWeight: 600,
        padding: '3px 9px',
        borderRadius: 'var(--plexa-r-sm)',
        letterSpacing: '0.02em',
        '& .MuiChip-label': { padding: 0 },
        /* Label padding is 0 — reset MUI’s negative deleteIcon margin so × stays visible */
        '& .MuiChip-icon': {
          marginLeft: 0,
          marginRight: 5,
          color: 'inherit',
        },
        '& .MuiChip-deleteIcon': {
          margin: 0,
          marginLeft: 5,
          marginRight: 0,
          width: 16,
          height: 16,
          fontSize: 16,
          color: 'currentColor',
          opacity: 1,
          '&:hover': {
            color: 'currentColor',
            opacity: 1,
          },
        },
      },
      filled: {
        background: 'var(--plexa-bg3)',
        color: 'var(--plexa-text2)',
        border: '1px solid var(--plexa-border-mid)',
      },
      colorPrimary: {
        background: 'var(--plexa-blue-faint)',
        color: 'var(--plexa-primary)',
        border: '1px solid rgba(26,75,219,.2)',
      },
      colorSuccess: {
        background: 'var(--plexa-success-faint)',
        color: 'var(--plexa-success)',
        border: '1px solid rgba(16,185,129,.25)',
      },
      colorError: {
        background: 'var(--plexa-danger-faint)',
        color: 'var(--plexa-danger)',
        border: '1px solid rgba(245,64,90,.25)',
      },
      colorWarning: {
        background: 'var(--plexa-warning-faint)',
        color: 'var(--plexa-warning)',
        border: '1px solid rgba(245,158,11,.25)',
      },
      colorInfo: {
        background: 'var(--plexa-blue-faint)',
        color: 'var(--plexa-info-dark)',
        border: '1px solid rgba(26,75,219,.2)',
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        padding: '16px 20px',
        borderRadius: 'var(--plexa-r-lg)',
        fontSize: '14px',
        border: '1px solid transparent',
      },
      standardSuccess: {
        background: 'var(--plexa-success-faint)',
        borderColor: 'rgba(16,185,129,.25)',
        color: 'var(--plexa-success)',
      },
      standardError: {
        background: 'var(--plexa-danger-faint)',
        borderColor: 'rgba(245,64,90,.25)',
        color: 'var(--plexa-danger)',
      },
      standardWarning: {
        background: 'var(--plexa-warning-faint)',
        borderColor: 'rgba(245,158,11,.25)',
        color: 'var(--plexa-warning)',
      },
      standardInfo: {
        background: 'var(--plexa-blue-faint)',
        borderColor: 'rgba(26,75,219,.25)',
        color: 'var(--plexa-info-dark)',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        background: 'var(--plexa-bg-raised)',
        border: '1px solid var(--plexa-border-mid)',
        borderRadius: 'var(--plexa-r-xl)',
        boxShadow: 'var(--plexa-shadow-lg)',
        backgroundImage: 'none',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontFamily: 'var(--plexa-font-display)',
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        padding: '24px 24px 8px',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        color: 'var(--plexa-text2)',
        lineHeight: 1.7,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontFamily: 'var(--plexa-font-mono)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--plexa-text3)',
        background: 'var(--plexa-bg2)',
        borderBottom: '1px solid var(--plexa-border-mid)',
      },
      body: {
        fontSize: '13px',
        color: 'var(--plexa-text1)',
        borderBottom: '1px solid var(--plexa-border)',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: 'background var(--plexa-t-fast)',
        '&:hover': { background: 'var(--plexa-bg2)' },
        '&.Mui-selected': { background: 'var(--plexa-primary-faint)' },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: 'var(--plexa-bg4)',
        border: '1px solid var(--plexa-border-mid)',
        color: 'var(--plexa-text1)',
        fontSize: '12px',
        padding: '5px 10px',
        borderRadius: 'var(--plexa-r-sm)',
        boxShadow: 'var(--plexa-shadow-md)',
      },
      arrow: { color: 'var(--plexa-bg4)' },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        background: 'var(--plexa-bg-raised)',
        border: '1px solid var(--plexa-border-mid)',
        borderRadius: 'var(--plexa-r-lg)',
        boxShadow: 'var(--plexa-shadow-lg)',
        padding: '8px',
      },
      list: { padding: 0 },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '13px',
        color: 'var(--plexa-text1)',
        borderRadius: 'var(--plexa-r-sm)',
        padding: '8px 12px',
        gap: '12px',
        transition: 'background var(--plexa-t-fast)',
        '&:hover': { background: 'var(--plexa-bg3)' },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: { borderColor: 'var(--plexa-border)' },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 42,
        height: 24,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 3,
          '&.Mui-checked': {
            transform: 'translateX(18px)',
            color: 'var(--plexa-primary)',
            '& + .MuiSwitch-track': {
              background: 'var(--plexa-primary-faint)',
              borderColor: 'var(--plexa-primary)',
              opacity: 1,
            },
          },
        },
        '& .MuiSwitch-thumb': {
          width: 14,
          height: 14,
          boxShadow: 'none',
          background: 'var(--plexa-text3)',
        },
        '& .Mui-checked .MuiSwitch-thumb': { background: 'var(--plexa-primary)' },
        '& .MuiSwitch-track': {
          borderRadius: 12,
          background: 'var(--plexa-bg4)',
          border: '1.5px solid var(--plexa-border-mid)',
          opacity: 1,
          transition:
            'background var(--plexa-t-base), border-color var(--plexa-t-base)',
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: 'var(--plexa-border-mid)',
        padding: 6,
        '&.Mui-checked': { color: 'var(--plexa-primary)' },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        color: 'var(--plexa-border-mid)',
        padding: 6,
        '&.Mui-checked': { color: 'var(--plexa-primary)' },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--plexa-text2)',
        minHeight: 40,
        '&.Mui-selected': { color: 'var(--plexa-primary)' },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: { background: 'var(--plexa-primary)', height: 2 },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: 5,
        borderRadius: 9999,
        background: 'var(--plexa-bg4)',
      },
      bar: { background: 'var(--plexa-primary)', borderRadius: 9999 },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: { color: 'var(--plexa-primary)' },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: { background: 'var(--plexa-overlay)' },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        background: 'var(--plexa-bg3)',
        '&::after': {
          background:
            'linear-gradient(90deg, transparent, var(--plexa-bg4), transparent)',
        },
      },
    },
  },
};

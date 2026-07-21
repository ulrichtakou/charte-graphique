import { createTheme, type Theme } from '@mui/material/styles';
import { yaoundeLogisBrand } from '../tokens/yaoundelogis/brand-foundation';
import { yaoundeLogisFontFamily } from '../tokens/yaoundelogis/yaoundelogis-typography';
import { fontWeights } from '../tokens/typography/typography-tokens';
import { yaoundeLogisRadii } from '../tokens/yaoundelogis/yaoundelogis-radius';
import {
  yaoundeLogisSurfacesByMode,
  type YaoundeLogisThemeMode,
} from '../tokens/yaoundelogis/surface-tokens';

declare module '@mui/material/styles' {
  interface Palette {
    yaounde: {
      gold: string;
      greenDark: string;
      cream: string;
      section: string;
    };
  }
  interface PaletteOptions {
    yaounde?: {
      gold: string;
      greenDark: string;
      cream: string;
      section?: string;
    };
  }
}

export type CreateYaoundeLogisMuiThemeOptions = {
  mode?: YaoundeLogisThemeMode;
};

export function createYaoundeLogisMuiTheme(
  options: CreateYaoundeLogisMuiThemeOptions = {},
): Theme {
  const mode = options.mode ?? 'light';
  const s = yaoundeLogisSurfacesByMode[mode];
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: s.primary,
        dark: isDark ? yaoundeLogisBrand.green : yaoundeLogisBrand.greenDark,
        light: isDark ? '#5CB578' : '#4CAF6A',
        contrastText: s.primaryContrast,
      },
      secondary: {
        main: s.secondary,
        contrastText: s.secondaryContrast,
      },
      success: {
        main: s.primary,
      },
      warning: {
        main: yaoundeLogisBrand.gold,
      },
      background: {
        default: s.bg,
        paper: s.bgRaised,
      },
      text: {
        primary: s.text,
        secondary: s.textMuted,
      },
      divider: s.border,
      yaounde: {
        gold: yaoundeLogisBrand.gold,
        greenDark: yaoundeLogisBrand.greenDark,
        cream: isDark ? s.bgCream : yaoundeLogisBrand.cream,
        section: s.bgSection,
      },
    },
    typography: {
      fontFamily: yaoundeLogisFontFamily,
      h1: { fontWeight: fontWeights.bold, color: s.heading },
      h2: { fontWeight: fontWeights.semibold, color: s.heading },
      h3: { fontWeight: fontWeights.semibold, color: s.heading },
      button: {
        textTransform: 'none',
        fontWeight: fontWeights.semibold,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: s.bg,
            color: s.text,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.button,
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
          containedPrimary: {
            backgroundColor: s.primary,
            color: s.primaryContrast,
            '&:hover': { backgroundColor: s.primaryHover },
          },
          outlined: {
            borderColor: isDark ? s.link : yaoundeLogisBrand.greenDark,
            color: isDark ? s.link : yaoundeLogisBrand.greenDark,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.card,
            backgroundColor: s.bgRaised,
            boxShadow: s.shadowCard,
            border: isDark ? `1px solid ${s.border}` : undefined,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.input,
            backgroundColor: s.bgInput,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: yaoundeLogisRadii.chip },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: s.link,
            fontWeight: fontWeights.medium,
            '&:hover': { color: s.linkHover },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}

export const yaoundeLogisLightTheme = createYaoundeLogisMuiTheme({ mode: 'light' });
export const yaoundeLogisDarkTheme = createYaoundeLogisMuiTheme({ mode: 'dark' });

/** @deprecated Préférer `yaoundeLogisLightTheme` */
export const yaoundeLogisTheme = yaoundeLogisLightTheme;

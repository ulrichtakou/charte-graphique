import { createTheme, type Theme } from '@mui/material/styles';
import {
  plexaBrandColors,
  plexaColorsByMode,
  type PlexaThemeMode,
} from '../tokens/plexa-one/plexa-colors';
import { plexaComponentOverrides } from './plexa-mui-overrides';

type CreatePlexaOneMuiThemeOptions = {
  mode: PlexaThemeMode;
};

declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      blue: string;
      mint: string;
      blueFaint: string;
      mintFaint: string;
    };
  }
  interface PaletteOptions {
    brand?: {
      blue: string;
      mint: string;
      blueFaint: string;
      mintFaint: string;
    };
  }
}

/**
 * Build the MUI theme for Plexa One DS v5.
 *
 * Palette values mirror the CSS variables (--plexa-*) so `sx` consumers
 * relying on `theme.palette.*` stay in sync with the dot-matrix global CSS.
 */
export function createPlexaOneMuiTheme(
  options: CreatePlexaOneMuiThemeOptions,
): Theme {
  const { mode } = options;
  const palette = plexaColorsByMode[mode];

  return createTheme({
    palette: {
      mode,
      primary: {
        main: palette.primary,
        light: mode === 'light' ? '#4E73E3' : '#33EBBC',
        dark: palette.primaryDim,
        contrastText: palette.textInv,
      },
      secondary: {
        main: mode === 'light' ? plexaBrandColors.mint : plexaBrandColors.blue,
        contrastText: palette.textInv,
      },
      error: {
        main: plexaBrandColors.danger,
        light: '#F76E83',
        dark: '#D2354C',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: plexaBrandColors.warning,
        contrastText: '#1F1300',
      },
      success: {
        main: palette.success,
        contrastText: '#FFFFFF',
      },
      info: {
        main: plexaBrandColors.infoDark,
        contrastText: '#0B1733',
      },
      background: {
        default: palette.bg,
        paper: palette.bgRaised,
      },
      text: {
        primary: palette.text1,
        secondary: palette.text2,
        disabled: palette.text3,
      },
      divider: palette.border,
      action: {
        hover: palette.bg3,
        selected: palette.primaryFaint,
        focus: palette.primaryFaint,
        disabled: palette.text3,
        disabledBackground: palette.bg3,
      },
      brand: {
        blue: plexaBrandColors.blue,
        mint: plexaBrandColors.mint,
        blueFaint: plexaBrandColors.blueFaint,
        mintFaint: plexaBrandColors.mintFaint,
      },
    },
    typography: {
      fontFamily:
        "'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
      fontSize: 15,
      htmlFontSize: 16,
      h1: {
        fontFamily: "'Artific','Inter',sans-serif",
        fontSize: 'clamp(2.4rem,4vw,3.8rem)',
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.04em',
      },
      h2: {
        fontFamily: "'Artific','Inter',sans-serif",
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
      },
      h3: {
        fontFamily: "'Artific','Inter',sans-serif",
        fontSize: '1.6rem',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
      },
      h4: {
        fontFamily: "'Artific','Inter',sans-serif",
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h5: {
        fontSize: '1.05rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      h6: {
        fontSize: '0.95rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: '15px',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '13px',
        lineHeight: 1.6,
      },
      caption: {
        fontSize: '12px',
        color: palette.text3,
      },
      button: {
        fontWeight: 500,
        fontSize: '14px',
        textTransform: 'none',
        letterSpacing: '0',
      },
      overline: {
        fontFamily: "'DM Mono',ui-monospace,monospace",
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontWeight: 500,
        lineHeight: 1.4,
      },
    },
    shape: {
      borderRadius: 9,
    },
    spacing: 4,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: plexaComponentOverrides,
  });
}

/** Convenience exports for direct ThemeProvider usage. */
export const plexaLightTheme = createPlexaOneMuiTheme({ mode: 'light' });
export const plexaDarkTheme = createPlexaOneMuiTheme({ mode: 'dark' });

import { createTheme, type Theme } from '@mui/material/styles';
import {
  yaoundeLogisBrand,
  yaoundeLogisSemantic,
} from '../tokens/yaoundelogis/brand-foundation';
import { yaoundeLogisFontFamily } from '../tokens/yaoundelogis/yaoundelogis-typography';
import { fontWeights } from '../tokens/typography/typography-tokens';
import { yaoundeLogisRadii } from '../tokens/yaoundelogis/yaoundelogis-radius';

declare module '@mui/material/styles' {
  interface Palette {
    yaounde: {
      gold: string;
      greenDark: string;
      cream: string;
    };
  }
  interface PaletteOptions {
    yaounde?: {
      gold: string;
      greenDark: string;
      cream: string;
    };
  }
}

export function createYaoundeLogisMuiTheme(): Theme {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: yaoundeLogisBrand.green,
        dark: yaoundeLogisBrand.greenDark,
        light: '#4CAF6A',
        contrastText: yaoundeLogisBrand.white,
      },
      secondary: {
        main: yaoundeLogisBrand.gold,
        contrastText: yaoundeLogisBrand.greenDark,
      },
      success: {
        main: yaoundeLogisBrand.green,
      },
      warning: {
        main: yaoundeLogisBrand.gold,
      },
      background: {
        default: yaoundeLogisBrand.white,
        paper: yaoundeLogisBrand.white,
      },
      text: {
        primary: yaoundeLogisBrand.grayDark,
        secondary: '#5C6B63',
      },
      divider: yaoundeLogisBrand.border,
      yaounde: {
        gold: yaoundeLogisBrand.gold,
        greenDark: yaoundeLogisBrand.greenDark,
        cream: yaoundeLogisBrand.cream,
      },
    },
    typography: {
      fontFamily: yaoundeLogisFontFamily,
      h1: { fontWeight: fontWeights.bold },
      h2: { fontWeight: fontWeights.semibold },
      h3: { fontWeight: fontWeights.semibold },
      button: {
        textTransform: 'none',
        fontWeight: fontWeights.semibold,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.button,
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
          containedPrimary: {
            backgroundColor: yaoundeLogisBrand.green,
            '&:hover': { backgroundColor: yaoundeLogisBrand.greenDark },
          },
          outlined: {
            borderColor: yaoundeLogisBrand.greenDark,
            color: yaoundeLogisBrand.greenDark,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.card,
            boxShadow: '0 4px 20px rgba(15, 61, 46, 0.08)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: yaoundeLogisRadii.input,
            backgroundColor: yaoundeLogisBrand.grayLight,
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
            color: yaoundeLogisSemantic.link,
            fontWeight: fontWeights.medium,
          },
        },
      },
    },
  });
}

export const yaoundeLogisTheme = createYaoundeLogisMuiTheme();

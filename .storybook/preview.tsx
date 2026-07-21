import type { Preview, Decorator } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Box, Button, GlobalStyles, Stack, Typography } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { YaoundeLogisThemeProvider } from '../src/theme/YaoundeLogisThemeProvider';
import {
  primitiveColorsToRootStyleObject,
  semanticColorsToRootStyleObject,
} from '../src/tokens/colors';
import { typographyRootStyleObject } from '../src/tokens/typography/typography-tokens';
import { yaoundeLogisTokensToStyleObject } from '../src/tokens/yaoundelogis';
import { yaoundeLogisSurfacesToStyleObject } from '../src/tokens/yaoundelogis/surface-tokens';
import type { YaoundeLogisThemeMode } from '../src/tokens/yaoundelogis/surface-tokens';
import '../src/styles/yaoundelogis-global.css';

function ThemeCanvasShell({ children }: { children: React.ReactNode }) {
  const [globals, updateGlobals] = useGlobals();
  const mode = ((globals.theme as YaoundeLogisThemeMode) || 'light') as YaoundeLogisThemeMode;

  const tokenStyles = {
    ':root': {
      ...yaoundeLogisTokensToStyleObject(),
      ...yaoundeLogisSurfacesToStyleObject(mode),
      ...primitiveColorsToRootStyleObject(),
      ...semanticColorsToRootStyleObject(),
      ...typographyRootStyleObject(),
    },
  };

  return (
    <YaoundeLogisThemeProvider forcedMode={mode} storageKey="sb-yaoundelogis-theme">
      <GlobalStyles styles={tokenStyles} />
      <Box sx={{ minHeight: '100%', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
            Thème YaoundéLogis — {mode === 'dark' ? 'Sombre' : 'Clair'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant={mode === 'light' ? 'contained' : 'outlined'}
              startIcon={<Sun size={14} />}
              onClick={() => updateGlobals({ theme: 'light' })}
            >
              Clair
            </Button>
            <Button
              size="small"
              variant={mode === 'dark' ? 'contained' : 'outlined'}
              startIcon={<Moon size={14} />}
              onClick={() => updateGlobals({ theme: 'dark' })}
            >
              Sombre
            </Button>
          </Stack>
        </Box>
        {children}
      </Box>
    </YaoundeLogisThemeProvider>
  );
}

const withYaoundeLogisTheme: Decorator = (Story) => (
  <ThemeCanvasShell>
    <Story />
  </ThemeCanvasShell>
);

const withRouter: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Thème YaoundéLogis',
      defaultValue: 'light',
      toolbar: {
        title: 'Thème',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Clair', icon: 'sun' },
          { value: 'dark', title: 'Sombre', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [withYaoundeLogisTheme, withRouter],
};

export default preview;

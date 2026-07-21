import type { Preview, Decorator } from '@storybook/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { createYaoundeLogisMuiTheme } from '../src/theme/create-yaoundelogis-mui-theme';
import {
  primitiveColorsToRootStyleObject,
  semanticColorsToRootStyleObject,
} from '../src/tokens/colors';
import { typographyRootStyleObject } from '../src/tokens/typography/typography-tokens';
import { yaoundeLogisTokensToStyleObject } from '../src/tokens/yaoundelogis';
import '../src/styles/yaoundelogis-global.css';

const theme = createYaoundeLogisMuiTheme();

const tokenStyles = {
  ':root': {
    ...yaoundeLogisTokensToStyleObject(),
    ...primitiveColorsToRootStyleObject(),
    ...semanticColorsToRootStyleObject(),
    ...typographyRootStyleObject(),
  },
};

const withYaoundeLogisTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={tokenStyles} />
    <Story />
  </ThemeProvider>
);

const withRouter: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#FFFFFF' },
        { name: 'cream', value: '#FFF5E0' },
        { name: 'section', value: '#F5F6F7' },
      ],
    },
  },
  decorators: [withYaoundeLogisTheme, withRouter],
};

export default preview;

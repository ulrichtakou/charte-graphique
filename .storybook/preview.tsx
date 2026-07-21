import type { Preview, Decorator } from '@storybook/react';
import { GlobalStyles } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
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

const withYaoundeLogisTheme: Decorator = (Story, context) => {
  const mode = (context.globals.theme as YaoundeLogisThemeMode) || 'light';

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
      <Story />
    </YaoundeLogisThemeProvider>
  );
};

const withRouter: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Thème YaoundéLogis',
      toolbar: {
        title: 'Thème',
        icon: 'mirror',
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

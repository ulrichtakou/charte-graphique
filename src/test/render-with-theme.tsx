import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { render } from '@testing-library/react';

const testTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#D91514' },
    secondary: { main: '#F97316' },
  },
});

export const renderWithTheme = (ui: ReactElement) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={testTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper });
};

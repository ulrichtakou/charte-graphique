import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createPlexaOneMuiTheme } from '../theme/create-plexa-one-mui-theme';
import '../styles/plexa-global.css';
import { App } from './App';

const theme = createPlexaOneMuiTheme({ mode: 'light' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

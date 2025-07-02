import '@fontsource/inter';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { store } from './store';
import { StyledMaterialDesignContent, theme } from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SnackbarProvider
            Components={{ error: StyledMaterialDesignContent }}
            iconVariant={{
              error: <ErrorOutlineIcon />,
            }}
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            autoHideDuration={5000}
          >
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);

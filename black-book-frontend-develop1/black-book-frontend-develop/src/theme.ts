import '@fontsource/inter';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { MaterialDesignContent } from 'notistack';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 850,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'fixed',
          bottom: '0',
          right: 0,
          width: '100%',
          backgroundColor: '#FFF',

          minHeight: '88px',

          [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
          },
        }),

        toolbar: ({ theme }) => ({
          '&.MuiToolbar-root': {
            padding: '20px 144px 26px 0',

            [theme.breakpoints.down('lg')]: {
              padding: '20px 45px 26px 0',
            },

            [theme.breakpoints.down('md')]: {
              padding: '10px',
            },
          },
        }),
        actions: {
          marginLeft: '32px',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#000',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '#notistack-snackbar': {
      gap: '12px',
    },

    '&.notistack-MuiContent': {
      flexWrap: 'nowrap',
      maxWidth: '320px',
      margin: '0 auto 74px auto',

      [theme.breakpoints.up('sm')]: {
        marginRight: '40px',
        marginBottom: '74px',
      },
      [theme.breakpoints.up('lg')]: {
        marginRight: '86px',
        marginBottom: '86px',
      },
    },
  }),
);

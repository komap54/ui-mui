import { Theme, createMuiTheme } from '@material-ui/core';

export const theme: Partial<Theme> = createMuiTheme({
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      text: {
        padding: '6px 15px',
      },
      contained: {
        boxShadow: 'none',
        backgroundColor: 'white',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#e5e5e5',
        },
      },
      root: {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderRadius: 2,
        border: '1px solid rgba(0,0,0,0.15)',
        padding: '6px 15px',
        textTransform: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&:active': {
          backgroundColor: '#e5e5e5',
          boxShadow: 'none',
          '& > $label': {
            transform: 'translateY(1px)',
          },
        },
      },
      label: {
        lineHeight: '20px',
        color: '#404040',
      },
    },
  },
});

export default theme;

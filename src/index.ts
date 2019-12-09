import merge from 'lodash/merge';
import { Theme, createMuiTheme } from '@material-ui/core';

export const konturTheme = createMuiTheme({
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    action: {
      hoverOpacity: 0.08,
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
          // backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&:active': {
          boxShadow: 'none',
          // backgroundColor: '#e5e5e5',
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
          // backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&:active': {
          // backgroundColor: '#e5e5e5',
          boxShadow: 'none',
          '& > $label': {
            transform: 'translateY(1px)',
          },
        },
      },
      label: {
        lineHeight: '20px',
        // color: '#404040',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          display: 'none',
        },
        '&:after': {
          display: 'none',
        },
      },
    },
    MuiInputBase: {
      root: {
        'letter-spacing': 'normal',
        // 'line-height': 'normal',
        // 'font-family': 'inherit',
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-variant': 'normal',
        'font-stretch': 'normal',
        'text-align': 'initial',
        'text-transform': 'none',
        'text-shadow': 'none',
        // width: 250px,
        color: 'inherit',
        'background-color': 'white',
        'box-shadow': 'none',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        'border-top-color': 'rgba(0, 0, 0, 0.15)',
        'font-size': '0.9rem',
        'line-height': 20,
        'padding-top': 2,
        // 'padding-bottom': 1,
        // height: 34,
      },
    },
  },
});

export default (theme: Theme): Partial<Theme> => merge(
  konturTheme,
  theme,
);

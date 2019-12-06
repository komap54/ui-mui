import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as SkbThemeProvider } from '@skbkontur/react-ui/ThemeProvider';
import FlatTheme from '@skbkontur/react-ui/lib/theming/themes/FlatTheme';
import { theme } from '../src';

export const Wrapper = ({ mui, skb }: { mui: React.ReactNode; skb: React.ReactNode }) => (
  <Grid container spacing={2}>
    <Grid item container xs={6} justify="center">
      <MuiThemeProvider theme={theme}>
        {mui}
      </MuiThemeProvider>
    </Grid>
    <Grid item container xs={6} justify="center">
      <div style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}>
        <SkbThemeProvider value={FlatTheme}>
          {skb}
        </SkbThemeProvider>
      </div>
    </Grid>
  </Grid>
);

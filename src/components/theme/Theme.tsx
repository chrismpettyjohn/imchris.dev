import React from 'react';
import {ThemeProps} from './Theme.types';
import {createMuiTheme, CssBaseline, ThemeProvider} from '@material-ui/core';

export function Theme({children}: ThemeProps) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Montserrat'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

import React from 'react';
import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: '#3282b8',
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

export function SiteHeader() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Chris Pettyjohn
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

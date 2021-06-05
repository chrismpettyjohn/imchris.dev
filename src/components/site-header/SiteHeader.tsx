import React from 'react';
import {sidebarWidth} from '../site-sidebar/SiteSidebar';
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
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${sidebarWidth}px)`,
        marginLeft: sidebarWidth,
      },
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

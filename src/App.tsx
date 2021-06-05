import React from 'react';
import {SitePages} from './pages/SitePages';
import {SiteHeader} from './components/site-header/SiteHeader';
import {sidebarWidth, SiteSideBar} from './components/site-sidebar/SiteSidebar';
import {CssBaseline, makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
    },
    content: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${sidebarWidth}px)`,
        marginLeft: sidebarWidth,
      },
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SiteHeader />
      <SiteSideBar />
      <main className={classes.content}>
        <SitePages />
      </main>
    </div>
  );
}

export default App;

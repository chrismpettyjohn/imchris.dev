import React from 'react';
import {SitePages} from './pages/SitePages';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteSideBar} from './components/site-sidebar/SiteSidebar';
import {CssBaseline, makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100%',
      minWidth: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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

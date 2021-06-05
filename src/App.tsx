import React from 'react';
import {SitePages} from './pages/SitePages';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteSideBar} from './components/site-sidebar/SiteSidebar';
import {CssBaseline, makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      width: '90vw',
    },
    content: {
      flex: 1,
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

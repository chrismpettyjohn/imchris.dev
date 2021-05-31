import React from 'react';
import {SitePages} from './pages/SitePages';
import {SiteSideBar} from './components/site-sidebar/SiteSidebar';
import {CssBaseline, makeStyles, createStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <CssBaseline classes={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <SiteSideBar />
        </Grid>
        <Grid item xs={10}>
          <SitePages />
        </Grid>
      </Grid>
    </CssBaseline>
  );
}

export default App;

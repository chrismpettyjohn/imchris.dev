import React from 'react';
import {HomePage} from './home/HomePage';
import {WorkPage} from './work/WorkPage';
import {AboutPage} from './about/AboutPage';
import {Switch, Router, Route} from 'wouter';
import {ContactPage} from './contact/ContactPage';
import {createStyles, makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#006064',
      color: 'white',
      minHeight: '100%',
      width: '100%',
    },
  })
);

export function SitePages() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} style={{marginTop: '2%'}}>
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/work">
              <WorkPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
}

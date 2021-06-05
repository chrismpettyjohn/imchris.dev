import React from 'react';
import {HomePage} from './home/HomePage';
import {WorkPage} from './work/WorkPage';
import {AboutPage} from './about/AboutPage';
import {Switch, Router, Route} from 'wouter';
import {ContactPage} from './contact/ContactPage';
import {createStyles, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#0f4c75',
      display: 'flex',
      color: 'white',
      marginTop: 64,
      minHeight: '100vh',
      width: '90vw',
    },
    container: {
      padding: '2.5%',
    },
  })
);

export function SitePages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
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
      </div>
    </div>
  );
}

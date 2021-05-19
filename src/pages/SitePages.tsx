import React from 'react';
import {HomePage} from './home/HomePage';
import {WorkPage} from './work/WorkPage';
import {AboutPage} from './about/AboutPage';
import {Switch, Router, Route} from 'wouter';
import {ContactPage} from './contact/ContactPage';

export function SitePages() {
  return (
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
  );
}

import React from 'react';
import {SitePages} from './pages/SitePages';
import {Grid, CssBaseline} from '@material-ui/core';
import {SiteSideBar} from './components/site-sidebar/SiteSidebar';

function App() {
  return (
    <CssBaseline>
      <Grid container spacing={4}>
        <Grid item xs={2} style={{position: 'relative'}}>
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

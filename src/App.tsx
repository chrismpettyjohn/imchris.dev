import React from 'react';
import {SitePages} from './pages/SitePages';
import {SiteHeader} from './components/site-header/SiteHeader';
import {Theme as ThemeWrapper} from './components/theme/Theme';
import {makeStyles, createStyles, Theme} from '@material-ui/core';
import {sidebarWidth, SiteSideBar} from './components/site-sidebar/SiteSidebar';

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
    <ThemeWrapper>
      <div className={classes.root}>
        <SiteHeader />
        <SiteSideBar />
        <main className={classes.content}>
          <SitePages />
        </main>
      </div>
    </ThemeWrapper>
  );
}

export default App;

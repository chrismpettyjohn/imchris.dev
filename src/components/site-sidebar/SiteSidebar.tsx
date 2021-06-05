import React, {useState} from 'react';
import {Link} from 'wouter';
import {Home, Info, Work, ContactMail} from '@material-ui/icons';
import {
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
  Divider,
  Hidden,
  Theme,
} from '@material-ui/core';

export const sidebarWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: sidebarWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      background: '#1b262c',
      color: 'white',
      width: sidebarWidth,
    },
    drawerIcon: {
      color: 'white',
    },
    drawerContainer: {
      overflow: 'auto',
    },
  });
});

export function SiteSideBar() {
  const classes = useStyles();
  const [isMobileOpen, setMobileOpen] = useState(false);

  function toggleMobileDrawer() {
    setMobileOpen(_ => !_);
  }

  function getDrawer() {
    return (
      <div className={classes.toolbar}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon className={classes.drawerIcon}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button>
                <ListItemIcon className={classes.drawerIcon}>
                  <Info />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link to="/work">
              <ListItem button>
                <ListItemIcon className={classes.drawerIcon}>
                  <Work />
                </ListItemIcon>
                <ListItemText primary="Work" />
              </ListItem>
            </Link>
            <Link to="/contact">
              <ListItem button>
                <ListItemIcon className={classes.drawerIcon}>
                  <ContactMail />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </div>
      </div>
    );
  }

  return (
    <>
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="left"
          open={isMobileOpen}
          onClose={toggleMobileDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {getDrawer()}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {getDrawer()}
        </Drawer>
      </Hidden>
    </>
  );
}

import React from 'react';
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
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: 250,
      flexShrink: 0,
    },
    drawerPaper: {
      background: '#353535',
      color: 'white',
      width: 250,
    },
    drawerIcon: {
      color: 'white',
    },
    drawerContainer: {
      overflow: 'auto',
    },
  })
);

export function SiteSideBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
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
    </Drawer>
  );
}

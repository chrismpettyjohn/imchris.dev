import React from 'react';
import {Link} from 'wouter';
import {Home, Info, Work, ContactMail, MusicNote} from '@material-ui/icons';
import {
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      marginLeft: 15,
      marginTop: 15,
      marginRight: 0,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    list: {
      width: '100%',
      height: 'calc(100% - 250)',
      backgroundColor: theme.palette.background.paper,
    },
    logo: {
      background: 'red',
      height: 250,
      width: '100%',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export function SiteSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.logo}>
        <Typography variant="h4">Chris P</Typography>
      </Paper>
      <List component="nav" className={classes.list}>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/work">
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <ListItem divider />
        <ListItem button>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="My Favorite Songs" />
        </ListItem>
      </List>
    </div>
  );
}

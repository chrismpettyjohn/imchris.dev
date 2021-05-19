import React from 'react';
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  ContactMail as ContactIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 62,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    menuTitle: {
      marginLeft: theme.spacing(1),
    },
  })
);

export function SiteHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" className={classes.menuButton}>
            Chris P.
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
            <Typography variant="h6" className={classes.menuTitle}>
              Home
            </Typography>
          </IconButton>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <PersonIcon />
            <Typography variant="h6" className={classes.menuTitle}>
              About
            </Typography>
          </IconButton>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <WorkIcon />
            <Typography variant="h6" className={classes.menuTitle}>
              Work
            </Typography>
          </IconButton>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ContactIcon />
            <Typography variant="h6" className={classes.menuTitle}>
              Contact
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

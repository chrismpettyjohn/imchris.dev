import React from 'react';
import {Link} from 'wouter';
import {Home, Info, Work, ContactMail} from '@material-ui/icons';
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
      backgroundColor: '#353535',
    },
    list: {
      width: '100%',
      height: 'calc(100% - 250)',
      color: 'white',
    },
    listIcon: {
      color: 'white',
    },
    logoContainer: {
      background:
        'url(https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/119963328_1395641623976054_8575227829765501463_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=ftj20LmbFSQAX_oRm32&_nc_ht=scontent-ort2-2.xx&oh=cd184697983de5308deaa99e36de258b&oe=60D86ED1)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      //background: '#284b63',
      height: 250,
      width: '100%',
      aligYSDFtems: 'center',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    logo: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  })
);

export function SiteSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.logoContainer} />
      <List component="nav" className={classes.list}>
        <Link href="/">
          <ListItem button>
            <ListItemIcon className={classes.listIcon}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemIcon className={classes.listIcon}>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/work">
          <ListItem button>
            <ListItemIcon className={classes.listIcon}>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemIcon className={classes.listIcon}>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

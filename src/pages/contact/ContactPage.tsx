import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderRadius: 0,
      padding: 4,
    },
    media: {
      height: 500,
      width: 400,
    },
  })
);

export function ContactPage() {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="home-page">
      <CardActionArea>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item></Grid>
            <Grid item>
              <Typography variant="h3">Contact Me</Typography>
              <Typography variant="subtitle1">maybe?</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

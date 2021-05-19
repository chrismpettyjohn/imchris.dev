import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#006064',
      color: 'white',
      flexGrow: 1,
      borderRadius: 0,
      padding: 4
    },
    media: {
      height: 500,
      width: 400,
    },
  }),
);


export function HomePage() {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="home-page">
      <CardActionArea>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item>
              <CardMedia className={classes.media} image="https://i.imgur.com/EWiOJD1.png" />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                Software solutions <b>that scale</b>
              </Typography>
              <Typography variant="subtitle1">
                With over <b>10 years</b> of experience, I strive to build the most innovative and long lasting products for my client's needs.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

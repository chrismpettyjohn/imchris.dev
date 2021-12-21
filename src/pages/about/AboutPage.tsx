import React from 'react';
import {createStyles, Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 500,
      width: 400,
    },
    jumbotron: {
      height: 750,
      width: '100%',
      backgroundImage: 'url(https://i.imgur.com/h6Fd7Cm.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    jumbotronText: {
      position: 'absolute',
      top: '45%',
      width: '100%',
      textAlign: 'center',
    },
  })
);

export function AboutPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item xl={12}>
        <Typography variant="h2">About Me</Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          Hey! I'm Chris, a Software Engineer with over 12 years of experience.
        </Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          As a kid, I've always had an interest in building web applications and
          learning more about how websites worked. This has translated into a
          career of helping small businesses and startups take their idea and
          transform it into a fast and scalable website using the latest
          technologies.
        </Typography>
      </Grid>
      <Grid item xl={12}>
        <hr />
      </Grid>
      <Grid item xl={12}>
        <Typography variant="h2">Why Work With Me?</Typography>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <div className={classes.jumbotron}>
          <div className={classes.jumbotronText}>
            <Typography variant="h2">Self Taught</Typography>
            <Typography variant="h6" style={{width: '50%', margin: '0 auto'}}>
              I spent my life learning and practicing development as a true
              passion of mine.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Results Driven</Typography>
              <br />
              <Typography variant="h6">
                By breaking down large problems into smaller ones, we can reduce
                complexity and solve bigger issues at the same time.
              </Typography>
            </div>
          </Grid>
          <Grid item xl={4}>
            <img
              src="https://i.imgur.com/yVpFNzX.png"
              height={550}
              width="100%"
              style={{float: 'right'}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={4}>
            <img
              src="https://i.imgur.com/3Pi4N0e.png"
              height={550}
              width="100%"
              style={{float: 'right'}}
            />
          </Grid>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Modern Architecture</Typography>
              <br />
              <Typography variant="h6">
                All my projects follow a modular and headless approach allowing
                endless change to the core and extensibility for extra features
                easily.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Experienced</Typography>
              <br />
              <Typography variant="h6">
                With over 12 years of experience in development, I've learned a
                lot of lessons and worked with a variety of projects.
              </Typography>
            </div>
          </Grid>
          <Grid item xl={4}>
            <img
              src="https://i.imgur.com/UwIIxCy.png"
              height={550}
              width="100%"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

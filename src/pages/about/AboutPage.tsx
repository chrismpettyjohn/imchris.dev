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
      backgroundImage: 'url(/img/whiteboard.jpg)',
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
          Hey! I'm Chris Pettyjohn, a Software Engineer with over 10 years of
          experience.
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
              Long ass copy here
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#003554'}}>
          <Grid item xl={4}>
            <img
              src="https://images.pexels.com/photos/7230408/pexels-photo-7230408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              height={550}
              width="100%"
              style={{float: 'right'}}
            />
          </Grid>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Passionate</Typography>
              <br />
              <Typography variant="h6" style={{width: '50%', margin: '0 auto'}}>
                Long ass copy here
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={4}>
            <img
              src="https://images.pexels.com/photos/372281/pexels-photo-372281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              height={550}
              width="100%"
            />
          </Grid>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Analytical</Typography>
              <br />
              <Typography variant="h6">Long ass copy here</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Results Driven</Typography>
              <br />
              <Typography variant="h6">Long ass copy here</Typography>
            </div>
          </Grid>
          <Grid item xl={4}>
            <img
              src="https://images.pexels.com/photos/372281/pexels-photo-372281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
              src="https://images.pexels.com/photos/372281/pexels-photo-372281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              height={550}
              width="100%"
            />
          </Grid>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Fast Delivery</Typography>
              <br />
              <Typography variant="h6">Long ass copy here</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="mt-4" xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Future Proof</Typography>
              <br />
              <Typography variant="h6">Long ass copy here</Typography>
            </div>
          </Grid>
          <Grid item xl={4}>
            <img
              src="https://images.pexels.com/photos/372281/pexels-photo-372281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
              src="https://images.pexels.com/photos/372281/pexels-photo-372281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              height={550}
              width="100%"
            />
          </Grid>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Well Planned</Typography>
              <br />
              <Typography variant="h6">Long ass copy here</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

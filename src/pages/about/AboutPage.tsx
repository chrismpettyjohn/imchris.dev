import React from 'react';
import {createStyles, Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#284b63',
      borderRadius: 0,
      color: 'white',
      display: 'flex',
      padding: '5%',
    },
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
    <Grid container className={classes.root} spacing={6}>
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
      <Grid item xl={12}>
        <div className={classes.jumbotron}>
          <div className={classes.jumbotronText}>
            <Typography variant="h2">Always Learning</Typography>
            <Typography variant="h6" style={{width: '50%', margin: '0 auto'}}>
              I'm always looking for new ways to improve and expand upon my
              knowledge. In order to build a product that is scalable it's
              important to always know what the industry is moving towards.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xl={12}>
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
              <Typography variant="h2">Fast Delivery</Typography>
              <br />
              <Typography variant="h6" style={{width: '50%', margin: '0 auto'}}>
                As a client, we will work together to come up with a plan that
                helps get your product to market quickly and with tracked
                sprints to help measure progress.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12}>
        <Grid container spacing={0} style={{backgroundColor: '#006494'}}>
          <Grid item xl={8}>
            <div style={{textAlign: 'center', marginTop: '15%'}}>
              <Typography variant="h2">Self Taught</Typography>
              <br />
              <Typography variant="h6">
                As a self taught developer, my experience is compromised mostly
                of real world scenarios and open source projects,
              </Typography>
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
    </Grid>
  );
}

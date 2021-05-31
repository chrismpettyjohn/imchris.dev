import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import TodayIcon from '@material-ui/icons/Today';
import StoreIcon from '@material-ui/icons/Store';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  createStyles,
  Grid,
  makeStyles,
  Typography,
  Paper,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from '@material-ui/lab';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#006064',
    },
    media: {
      height: 500,
      width: 400,
    },
    jumbotron: {
      height: 500,
      width: '100%',
      backgroundImage: 'url(/img/desk.jpg)',
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
    timelineDetails: {
      color: 'white',
      padding: '6px 16px',
      backgroundColor: '#415a77',
    },
    timelineDot: {
      backgroundColor: '#415a77',
    },
    timelineTime: {
      color: 'white',
      fontSize: '2em',
    },
  })
);

export function HomePage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xl={12}>
        <div className={classes.jumbotron}>
          <div className={classes.jumbotronText}>
            <Typography variant="h2">
              Software solutions <b>that scale</b>
            </Typography>
            <Typography variant="h6">
              With over <b>10 years</b> of experience, I strive to build the
              most innovative products for my clients.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xl={12}>
        <div style={{maxWidth: 1200}}>
          <Typography variant="h2">Who I Am</Typography>
          <Typography variant="body1">
            I'm a Software Engineer with a drive to not only provide the best
            products, but also to do so with everlasting technology that can be
            built indefinitely.
          </Typography>
        </div>
      </Grid>
      <Grid item xl={12}>
        <Typography variant="h2">My Journey</Typography>
        <br />
      </Grid>
      <Grid item xl={8}>
        <Timeline>
          <TimelineItem>
            <TimelineContent>
              <Typography variant="body2" className={classes.timelineTime}>
                2010
              </Typography>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot}>
                <GitHubIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineDetails}>
                <Typography variant="h6" component="h1">
                  Started Developing
                </Typography>
                <Typography>At 10, I wrote my first CMS</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <Typography variant="body2" className={classes.timelineTime}>
                2014
              </Typography>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot}>
                <StoreIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineDetails}>
                <Typography variant="h6" component="h1">
                  Consulting
                </Typography>
                <Typography>
                  By 14, I helped small businesses take their platform to the
                  internet.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <Typography variant="body2" className={classes.timelineTime}>
                2018
              </Typography>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot}>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineDetails}>
                <Typography variant="h6" component="h1">
                  Professional Career
                </Typography>
                <Typography>
                  At 19, I became a Software Engineer for my first full time
                  job.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <Typography variant="body2" className={classes.timelineTime}>
                2021
              </Typography>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot}>
                <TodayIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.timelineDetails}>
                <Typography variant="h6" component="h1">
                  Present
                </Typography>
                <Typography>
                  I help startups build scalable Node applications.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import TodayIcon from '@material-ui/icons/Today';
import StoreIcon from '@material-ui/icons/Store';
import GitHubIcon from '@material-ui/icons/GitHub';
import BusinessIcon from '@material-ui/icons/Business';
import {Timeline} from '../../components/timeline/Timeline';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import {createStyles, Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

export function HomePage() {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item xl={12}>
        <div className={classes.jumbotron}>
          <div className={classes.jumbotronText}>
            <Typography variant="h2">
              Software solutions <b>that scale</b>
            </Typography>
            <Typography variant="h6">
              With over <b>12 years</b> of experience, I strive to build the
              most innovative solutions that scale.
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
      </Grid>
      <Grid item xl={8}>
        <Timeline
          items={[
            {
              year: 2010,
              name: 'Started Developing',
              desc: 'At 10, I wrote my first website using HTML, CSS and PHP.',
              icon: <CodeIcon />,
            },
            {
              year: 2012,
              name: 'First Product Launched',
              desc: 'At 12, I launched my first game that got over 100 users monthly!',
              icon: <WebIcon />,
            },
            {
              year: 2014,
              name: 'Started Consulting',
              desc: 'By 14, I started using my experiences to help small businesses gain online presence and implement cloud technologies.',
              icon: <StoreIcon />,
            },
            {
              year: 2016,
              name: 'Open Source Development',
              desc: "While I always maintained open source code, at 16 my developments really took off with exciting CMS's that adapted a modern web app approach",
              icon: <GitHubIcon />,
            },
            {
              year: 2017,
              name: 'Enlisted in the Army Reserve',
              desc: 'During my time in the Army, I learned many valuable skills that helped make me a more efficient team member',
              icon: <PermContactCalendarIcon />,
            },
            {
              year: 2018,
              name: 'Professional Career',
              desc: 'At 19, I started a position as Software Engineer where I led many projects that shaped the architecture of the product.',
              icon: <WorkIcon />,
            },
            {
              year: 2021,
              name: 'Fortune 100',
              desc: 'By 21, I started working a Lead Engineer contract for Nike',
              icon: <BusinessIcon />,
            },
            {
              year: 2021,
              name: 'Present',
              desc: 'I help startups build scalable Node applications.',
              icon: <TodayIcon />,
            },
          ].reverse()}
        />
      </Grid>
    </Grid>
  );
}

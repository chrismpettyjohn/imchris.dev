import React from 'react';
import {ProjectCard} from './project-card/ProjectCard';
import {ProjectCardProps} from './project-card/ProjectCard.types';
import {createStyles, Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#284b63',
    },
    media: {
      height: 500,
      width: 400,
    },
  })
);

const projects: ProjectCardProps[] = [
  {
    title: 'Marketing Milk',
    children:
      'Marketing Milk is an analytics dashboard that integrates with hundreds of APIs to provide an in-depth look at how your business is performing.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: [
      'Typescript',
      'NodeJS',
      'NestJS',
      'React',
      'Postgres',
      'REST',
      'HTTP',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'ECHA Pets',
    children:
      'ECHA Pets is an adoption platform that helps provide near real time results on pets available for adoption near you and facilitates the adoption process.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: [
      'Javascript',
      'NodeJS',
      'Express',
      'AngularJS',
      'MySQL',
      'REST',
      'HTTP',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Instinct',
    children:
      'Instinct is a collection of reusable front and back end modules that enable developers to build websites quicker and with well tested, scalable code.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: [
      'Typescript',
      'NodeJS',
      'NestJS',
      'React',
      'MySQL',
      'REST',
      'HTTP',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Heroic',
    children:
      'Heroic is a CMS for a niche community that allows people to build websites with ease and peace of mind knowing their site is safe from any potential threats.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: [
      'Javascript',
      'NodeJS',
      'NestJS',
      'VueJS',
      'MySQL',
      'REST',
      'HTTP',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Cerberus Security',
    children:
      'Cerberus is an admin panel for enterprise apps that handles authentication and authorization.  The main priority is on being preventive on threats by having 2 step approval for dangerous actions.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: 'Simple Blog',
    children:
      'Simple Blog enables users to create a blogging platform quickly and focus on content, not customization of their blog.',
    imageURL:
      'https://images.pexels.com/photos/3536259/pexels-photo-3536259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    technologies: [
      'Typescript',
      'NodeJS',
      'Express',
      'React',
      'MySQL',
      'REST',
      'HTTP',
      'HTML',
      'CSS',
    ],
  },
];

export function WorkPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xl={12}>
        <Typography variant="h2">My Work</Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          Take a look at some of my previous projects.
        </Typography>
      </Grid>
      <Grid item xl={12}>
        <Grid container spacing={4}>
          {projects.map((project, projectIndex) => (
            <Grid key={`project_${projectIndex}`} item xl={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

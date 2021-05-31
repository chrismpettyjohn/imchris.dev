import React from 'react';
import {ProjectCardProps} from './ProjectCard.types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      background: '#0d1b2a',
      color: 'white',
    },
    chip: {
      background: '#415a77',
      color: 'white',
      marginRight: 5,
      marginBottom: 5,
    },
  })
);

export function ProjectCard({
  children,
  title,
  technologies,
  imageURL,
}: ProjectCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" height={500} image={imageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {children}
          </Typography>
          <br />
          {technologies.map((technology, technologyIndex) => (
            <Chip
              className={classes.chip}
              key={`technology_${title}_${technology}_${technologyIndex}`}
              label={technology}
            />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import {TimelineProps} from './Timeline.types';
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  Timeline as MaterialTimeline,
} from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timelineItem: {
      background: '#1b262c',
      padding: theme.spacing(2),
      '&::before': {
        content: 'none',
        display: 'none',
      },
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

export function Timeline({items}: TimelineProps) {
  const classes = useStyles();
  return (
    <MaterialTimeline align="alternate">
      {items.map((item, itemIndex) => (
        <TimelineItem
          className={classes.timelineItem}
          key={`timeline_item_${itemIndex}`}
        >
          <TimelineContent>
            <Typography variant="body2" className={classes.timelineTime}>
              {item.year}
            </Typography>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineDot className={classes.timelineDot}>
              {item.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.timelineDetails}>
              <Typography variant="h6" component="h1">
                {item.name}
              </Typography>
              <Typography>{item.desc}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MaterialTimeline>
  );
}

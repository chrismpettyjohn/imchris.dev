import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#778da9',
      minHeight: '100%',
      width: '100%',
    },
    card: {
      background: '#1b263b',
      color: 'white',
    },
    title: {
      fontSize: 24,
    },
    formInput: {
      color: 'white',
    },
  })
);

export function ContactPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xl={12}>
        <Typography variant="h2">Contact Me</Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          Please fill out the form below to get in touch or feel free to send me
          an email directly!
        </Typography>
        <br />
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Get in Touch
            </Typography>
            <Grid container spacing={6}>
              <Grid item xl={6}>
                <TextField
                  className={classes.formInput}
                  label="Phone Number"
                  type="phone"
                  fullWidth
                />
              </Grid>
              <Grid item xl={6}>
                <TextField label="Email Address" type="phone" fullWidth />
              </Grid>
              <Grid item xl={12}>
                <TextField
                  label="Project Description"
                  type="phone"
                  fullWidth
                  multiline={true}
                  rows={10}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

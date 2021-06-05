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
    card: {
      background: '#1b263b',
      color: 'white',
      width: '80vw',
    },
    title: {
      fontSize: 24,
    },
    formInput: {
      color: 'white',
    },
    formLabel: {
      color: 'white',
    },
  })
);

export function ContactPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
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
                  label="Phone Number"
                  type="phone"
                  InputProps={{
                    className: classes.formInput,
                  }}
                  InputLabelProps={{
                    className: classes.formLabel,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xl={6}>
                <TextField
                  label="Email Address"
                  type="phone"
                  fullWidth
                  InputProps={{
                    className: classes.formInput,
                  }}
                  InputLabelProps={{
                    className: classes.formLabel,
                  }}
                />
              </Grid>
              <Grid item xl={12}>
                <TextField
                  label="Project Description"
                  type="phone"
                  fullWidth
                  multiline={true}
                  rows={10}
                  InputProps={{
                    className: classes.formInput,
                  }}
                  InputLabelProps={{
                    className: classes.formLabel,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

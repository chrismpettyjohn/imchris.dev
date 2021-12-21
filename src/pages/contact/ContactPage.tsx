import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';

export function ContactPage() {
  return (
    <Grid container spacing={6}>
      <Grid item xl={12}>
        <Typography variant="h2">Contact Me</Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          You can contact me directly with the following...
        </Typography>
        <br />
      </Grid>
      <Grid item xl={12}>
        <div className="d-flex">
          <a
            href="https://www.linkedin.com/in/chrismpettyjohn/"
            style={{textDecoration: 'none'}}
            target="_blank"
          >
            <Button
              color="primary"
              variant="contained"
              style={{fontSize: '1.4rem'}}
            >
              LinkedIn
            </Button>
          </a>
          <a
            href="mailto:chrismpettyjohn@gmail.com"
            style={{textDecoration: 'none', marginLeft: '2%'}}
          >
            <Button
              color="secondary"
              variant="contained"
              style={{fontSize: '1.4rem'}}
            >
              My Email
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

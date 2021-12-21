import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Button, Grid, Typography} from '@material-ui/core';

export function ContactPage() {
  return (
    <Grid container spacing={6}>
      <Grid item xl={12}>
        <Typography variant="h2">Contact Me</Typography>
        <br />
        <Typography variant="h6" style={{width: '50%'}}>
          You can contact me directly via the following
        </Typography>
        <br />
      </Grid>
      <Grid item xl={12}>
        <div className="d-flex">
          <a
            href="mailto:chrismpettyjohn@gmail.com"
            style={{textDecoration: 'none'}}
          >
            <Button
              color="default"
              variant="contained"
              style={{fontSize: '1.4rem'}}
            >
              <MailIcon />
              My Email
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/chrismpettyjohn/"
            style={{textDecoration: 'none', marginLeft: '2%'}}
            target="_blank"
          >
            <Button
              color="primary"
              variant="contained"
              style={{fontSize: '1.4rem'}}
            >
              <LinkedInIcon />
              LinkedIn
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

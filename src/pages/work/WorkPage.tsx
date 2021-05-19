import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#33691E',
      color: 'white',
      flexGrow: 1,
      borderRadius: 0,
      padding: 4,
    },
    media: {
      height: 500,
    },
  })
);

export function WorkPage() {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="home-page">
      <CardActionArea>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3">Previous Work</Typography>
            </Grid>
            <Grid item>
              <Card elevation={2}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.marketingmilk.com/wp-content/themes/marketing-milk/static/img/LaptopV2.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Marketing Milk
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

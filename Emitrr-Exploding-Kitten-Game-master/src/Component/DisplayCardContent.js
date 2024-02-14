import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DisplayCardContent = ({ cardContent, cardRemaining, res, defuseCardNumber }) =>
(
  <Card style ={{background: "rgb(52,51,74)",
    background: "linear-gradient(90deg, rgba(52,51,74,1) 0%, rgba(237,132,11,1) 47%, rgba(89,96,27,1) 100%)"}}>
    <CardContent>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant='h6' style={{color:"yellow"}}>{cardContent}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' style={{color:"white"}}>Cards Left: {cardRemaining}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='body2' style={{color: "white"}}>{res}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body2' style={{color:"white"}}>Defuse: {defuseCardNumber}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default DisplayCardContent;

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Comment(props) {
  const {comment} = props;
  return (
      <Grid className="comment">
        <Card sx={{display: 'flex'}}>
          <CardContent sx={{flex: 1}}>
            <Typography variant="subtitle1" paragraph>
              {comment.comment}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  );
}

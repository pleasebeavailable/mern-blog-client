import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useSelector} from "react-redux";

export default function PostScreen() {

  const post = useSelector(state => state.post.selectedPost);
  return (
      <Grid item xs={12} md={6}>
        <Card sx={{display: 'flex'}}>
          <CardContent sx={{flex: 1}}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
          <CardMedia
              component="img"
              sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
              image={post.imageUrl}
              alt={post.imageLabel}
          />
        </Card>
      </Grid>
  );
}

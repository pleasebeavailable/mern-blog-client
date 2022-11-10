import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";

export default function MainFeaturedPost() {
  const posts = useSelector(state => state.post.posts);
  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  const ConditionalRender = () => {
    if (posts.length === 0) {
      return <div/>
    } else {
      return <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${randomPost.imageUrl})`,
          }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{display: 'none'}} src={randomPost.imageUrl}
              alt={randomPost.imageLabel}/>}
        <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
                sx={{
                  position: 'relative', p: {xs: 3, md: 6}, pr: {md: 0},
                }}
            >
              <Typography component="h1" variant="h3" color="inherit"
                          gutterBottom>
                {randomPost.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {randomPost.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {randomPost.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    }
  }

  return (<ConditionalRender/>);
}

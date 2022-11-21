import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useDispatch, useSelector} from "react-redux";
import {readPost} from "../redux/actions/post";
import {READ_POST} from "../constants/constants";

export default function MainFeaturedPost() {
  const posts = useSelector(state => state.post.posts);
  const post = posts[Math.floor(Math.random() * posts.length)];

  const dispatch = useDispatch();
  const goToPostScreen = () => {
    dispatch(readPost({route: READ_POST, post}));
  };

  const ConditionalRender = () => {
    if (posts.length === 0) {
      return <div/>
    } else {
      const imageContent = post.imageContent ? JSON.parse(post.imageContent) : "";
      return <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageContent})`,
          }}
      >
        {/* Increase the priority of the hero background image */}
        {imageContent !== "" && <img style={{display: 'none'}} src={post.imageContent}
              alt={post.imageLabel}/>}
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
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description.substring(0, 200) + "..."}
              </Typography>
              <Link style={{textDecoration: 'none'}}
                    noWrap
                    variant="variant1" onClick={goToPostScreen}>
                {post.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    }
  }

  return (<ConditionalRender/>);
}

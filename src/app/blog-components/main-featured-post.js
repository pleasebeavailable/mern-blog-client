import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import {Container} from "@mui/system";

export default function MainFeaturedPost() {

  const posts = useSelector(state => state.post.posts);
  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  return (
      <Container></Container>
  );
}

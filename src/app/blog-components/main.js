import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './markdown.js';
import {useSelector} from "react-redux";

export default function Main(props) {
  const {title} = props;
  const posts = useSelector(state => state.post.posts);
  return (
      <Grid
          item
          xs={12}
          md={8}
          sx={{
            '& .markdown': {
              py: 3,
            },
          }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider/>
        {posts.map((post) => (
            <Markdown className="markdown" key={post._id}>
              {post.description}
            </Markdown>
        ))}
      </Grid>
  );
}

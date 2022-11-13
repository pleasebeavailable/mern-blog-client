import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import FeaturedPosts from "../post-components/featured-posts";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";

export default function SectionPosts() {
  const section = useSelector(
      state => state.post.selectedSection).payload.payload;
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
        <Typography variant="h4" gutterBottom>
          {section}
        </Typography>
        <Typography variant="h6" gutterBottom>
          List of all posts under "{section}" section:
        </Typography>
        <Divider/>
        <FeaturedPosts/>
      </Grid>
  );
}

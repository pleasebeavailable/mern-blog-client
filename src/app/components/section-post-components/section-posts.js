import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import FeaturedPosts from "../post-components/featured-posts";

export default function SectionPosts() {

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
          SECTION TITLE
        </Typography>
        <Typography variant="h6" gutterBottom>
          List of all posts under --section-- title:
        </Typography>
        <Divider/>
        <FeaturedPosts/>
      </Grid>
  );
}

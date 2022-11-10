import React from "react";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../../blog-components/featured-post.js";
import {useSelector} from "react-redux";

export default function FeaturedPosts() {
  const posts = useSelector(state => state.post.posts);
  return (
      <React.Fragment>
        <Grid container spacing={4}>
          {posts.map((post) => (
              <FeaturedPost key={post._id} post={post}/>
          ))}
        </Grid>
      </React.Fragment>
  );
}




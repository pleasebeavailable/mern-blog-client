import * as React from "react";
import Main from "../blog-components/main.js";
import Sidebar from "../blog-components/sidebar.js";
import Footer from "../blog-components/footer.js";
import Grid from "@mui/material/Grid";
import Header from "../blog-components/header.js";
import {Container} from "@mui/system";
import PostDataPage from "./post-components/post-data-page";
import MainFeaturedPost from "../blog-components/main-featured-post";

const posts = ["post1", "post2", "post3"];

export default function StartingPage() {
  return (
      <Container>
        <Header title="title"/>
        <main>
          <MainFeaturedPost/>
          <PostDataPage/>
          <Grid container spacing={5} sx={{mt: 3}}>
            <Main title="From the firehose" posts={posts}/>
            <Sidebar/>
          </Grid>
        </main>
        <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
        />
        </Container>
  );
}

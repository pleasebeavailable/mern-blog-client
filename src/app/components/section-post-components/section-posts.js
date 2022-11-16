import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import FeaturedPosts from "../post-components/featured-posts";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import RaisedButton from "material-ui/RaisedButton";
import {navigate} from "../../redux/actions/navigate";
import {CREATE_A_POST} from "../../constants/routes";

import "./style.css"

export default function SectionPosts() {
  const dispatch = useDispatch();
  const section = useSelector(
      state => state.post.selectedSection).payload.payload;

  const goToCreatePost = () => {
    dispatch(navigate({route: CREATE_A_POST}));
  }
  return (
      <Grid className="grid-style"
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
        <RaisedButton className="post-bottom"
                      onClick={goToCreatePost}
                      primary={true}
                      type="submit"
                      label="Create a post"
        />
      </Grid>
  );
}

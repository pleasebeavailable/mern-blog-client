import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Post from '../model/post';
import {useDispatch} from "react-redux";
import {readPost} from "../redux/actions/post";
import {READ_POST} from "../constants/constants";
import Link from "@mui/material/Link";

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const {post} = props;
  const dispatch = useDispatch();

  const goToPostScreen = () => {
    dispatch(readPost({route: READ_POST, post}));
  };
  const imageContent = post.imageContent ? JSON.parse(post.imageContent) : "";
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
              {post.description.substring(0, 100) + "..."}
            </Typography>
            <Link style={{textDecoration: 'none'}}
                  noWrap
                  variant="body2"
                  onClick={goToPostScreen}>
              Continue reading...
            </Link>
          </CardContent>
          {imageContent !== "" && <CardMedia
              component="img"
              sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
              image={imageContent}
              alt={post.imageLabel}
          />}
        </Card>
      </Grid>
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useDispatch, useSelector} from "react-redux";
import "./style.css";
import {Container} from "@mui/system";
import RaisedButton from "material-ui/RaisedButton";
import {postNewComment} from "../../redux/actions/post";

export default function PostScreen() {
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.selectedPost);

  const handleChange = (event) => setComment(event.target.value);

  function postComment(event) {
    event.preventDefault();
    dispatch(postNewComment({postId: post._id, comment: comment}));
  }

  return (<Container className="parent-container">
        <Typography className="margin-space" component="h2" variant="h5">
          {post.title}
        </Typography>
        <Typography className="margin-space" variant="subtitle1"
                    color="text.secondary">
          {post.date}
        </Typography>
        <Card className="card" sx={{display: 'flex'}}>
          <CardContent sx={{flex: 1}}>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
          <CardMedia
              component="img"
              mr-2="true"
              sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
              image={post.imageUrl}
              alt={post.imageLabel}
          />
        </Card>

        <form className="comment" onSubmit={postComment}>
          <textarea
              value={comment}
              onChange={handleChange}
              placeholder="Write a comment!"
              rows={5}
          />
          <br/>
          <RaisedButton
              primary={true}
              type="submit"
              label="post"
          />
        </form>
      </Container>
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Comment from "../../blog-components/comment";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import {postNewComment} from "../../redux/actions/post";

export default function Comments(props) {
  const {post} = props;
  const [comment, setComment] = React.useState("");
  const dispatch = useDispatch();
  const comments = useSelector(state => state.post.comments);
  const handleChange = (event) => setComment(event.target.value);

  function postComment(event) {
    event.preventDefault();
    setComment("");
    dispatch(postNewComment({postId: post._id, comment: comment}));
  }

  return (
      <div>
        <Typography style={{marginBottom: "10px"}} component="h2" variant="h5">
          Comments
        </Typography>
        {comments && comments.map((comment) => (
            <Comment key={comment._id} comment={comment}/>
        ))}
        <form style={{width: "90%"}} onSubmit={postComment}>
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

      </div>
  );
}

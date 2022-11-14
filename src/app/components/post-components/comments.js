import * as React from 'react';
import Typography from '@mui/material/Typography';
import Comment from "../../blog-components/comment";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import {deleteComment, postNewComment} from "../../redux/actions/post";

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

  function onDeleteComment(commentId) {
    dispatch(deleteComment({postId: post._id, commentId: commentId}));
  }

  return (
      <div>
        <Typography style={{marginBottom: "10px"}} component="h2" variant="h5">
          Comments
        </Typography>
        {comments && comments.map((comment) => (
            <Comment key={comment._id} comment={comment}
                     onDelete={() => onDeleteComment(comment._id)}/>
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

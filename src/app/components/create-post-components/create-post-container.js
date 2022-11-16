import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CreatePostForm from "./create-post-form";
import {createPost, handleChange} from "../../redux/actions/post";

export default function CreatePostContainer() {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.newPost);

  const handleFormChange = (event) => {
    let newPost = {...post}
    const field = event.target.name;
    newPost[field] = event.target.value;
    dispatch(handleChange(newPost));
  }
  const submitPost = () => {
    dispatch(createPost(post));

  }
  return (
      <div>
        <CreatePostForm
            onSubmit={submitPost}
            onChange={handleFormChange}
            post={post}
        />
      </div>
  );
}



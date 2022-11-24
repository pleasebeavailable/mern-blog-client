import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import getPosts from "../../redux/actions/post";
import FeaturedPosts from "./featured-posts";

export default function PostDataPage() {
  const isLoading = useSelector(state => state.post.isLoading);
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, []);

  return (<React.Fragment>
    {isLoading && posts === null && <p> Loading...</p>}
    {!isLoading && posts !== null && <FeaturedPosts/>}
  </React.Fragment>);
}



import React from "react";
import FeaturedPosts from "./featured-posts.js";
import getPosts from "../../redux/actions/post";
import {connect} from "react-redux";

class PostDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: props.isLoaded, posts: props.posts, error: {}
    };
  }

  componentDidMount() {
    try {
      getPosts();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
        <React.Fragment>
          {this.state.isLoading && <p>Loading...</p>}
          {!this.state.isLoading && <FeaturedPosts props={this.state.posts}/>}
        </React.Fragment>);
  }
}

const mapDispatchToProps = dispatch => ({
  setPosts: getPosts
});

const mapStateToProps = state => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDataPage);

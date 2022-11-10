import React from "react";
import {connect} from "react-redux";
import getPosts from "../../redux/actions/post";
import FeaturedPosts from "./featured-posts";

class PostDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: props.isLoaded, posts: props.posts, error: {}
    };
  }

  componentDidMount() {
    try {
      this.props.setPosts();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (<React.Fragment>
      {this.state.isLoading && <p>Loading...</p>}
      {!this.state.isLoading && <FeaturedPosts/>}
    </React.Fragment>);
  }
}

const mapDispatchToProps = dispatch => ({
  setPosts: () => dispatch(getPosts())
});

const mapStateToProps = state => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDataPage);

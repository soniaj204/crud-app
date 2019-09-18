import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        <h1>All Posts</h1>
        {this.props.posts.map((post) => <Post key={post.id} post={post} /> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(Posts);

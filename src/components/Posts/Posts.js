import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Edit from "../Edit/Edit";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        <h1>All Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <Edit key={post.id} post={post} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(Posts);

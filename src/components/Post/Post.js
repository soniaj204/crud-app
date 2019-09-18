import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="post">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.description}</p>
      </div>
    );
  }
}

export default Post;

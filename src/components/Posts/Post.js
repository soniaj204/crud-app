import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="post">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.description}</p>
        <div>
          <button
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_POST",
                id: this.props.post.id
              })
            }
          >
            Edit
          </button>
          <button
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Post);

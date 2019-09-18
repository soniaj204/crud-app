import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
  state = {};

  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newDescription = this.getDescription.value;
    const data = {
      newTitle,
      newDescription
    };
    this.props.dispatch({
      type: "UPDATE_POST",
      id: this.props.post.id,
      data: data
    });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="10"
            cols="25"
            placeholder="Post Description"
            ref={input => (this.getDescription = input)}
            defaultValue={this.props.post.description}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(Edit);

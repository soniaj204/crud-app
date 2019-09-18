import React, { Component } from "react";
import { connect } from "react-redux";

class FormPost extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const description = this.getDescription.value;
    const data = {
      id: new Date(),
      title,
      description,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    });
    this.getTitle.value = "";
    this.getDescription.value = "";
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Post Title"
              required
              ref={input => (this.getTitle = input)}
            />
          </div>
          <div>
            <textarea
              rows="10"
              cols="25"
              placeholder="Post Description"
              required
              ref={input => (this.getDescription = input)}
            ></textarea>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(FormPost);

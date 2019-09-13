import React, { Component } from "react";

class AddItem extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.addProducts(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = "";
        this.priceInput.value = "";
    }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Add Products</h1>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
        <button>Add</button>
        <hr />
      </form>
    );
  }
}

export default AddItem;

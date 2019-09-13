import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.deleteProducts = this.deleteProducts.bind(this);
    this.editProducts = this.editProducts.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  deleteProducts() {
    const { deleteProducts, name } = this.props;

    deleteProducts(name);
  }

  editProducts() {
    this.setState({
      edit: true
    });
  }

  editOn() {
    this.setState({
      edit: true
    });
  }

  editSubmit(event) {
    event.preventDefault();
    this.props.editSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({
        edit: false
    });
  }

  render() {
    const { name, price } = this.props;

    return (
      <div>
        {this.state.edit ? (
          <form onSubmit={this.state.editSubmit}>
            <input
              placeholder="Name"
              ref={nameInput => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <input
              placeholder="Price"
              ref={priceInput => (this.priceInput = priceInput)}
              defaultValue={price}
            />
            <button>Save</button>
          </form>
        ) : (
          <p>
            {name}
            {` | `}
            {price}
            {` | `}
            <button onClick={this.editProducts}>Edit</button>
            {` | `}
            <button onClick={this.deleteProducts}>Delete</button>
          </p>
        )}
      </div>
    );
  }
}

export default ProductItem;

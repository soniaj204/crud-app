import React, { Component } from "react";
import ProductItem from "./ProductItem";
import AddItem from "./AddItem";
import "./App.css";

const products = [
  {
    name: "Ipad",
    price: 200
  },
  {
    name: "Iphone",
    price: 400
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };

    this.addProducts = this.addProducts.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  deleteProducts(name) {
    const products = this.getProducts();

    const changedProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: changedProducts });
  }

  addProducts(name, price) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  editSubmit(name, price, originalName) {
    let products = this.getProducts();

   products = products.map(product => {
     if(product.name === originalName) {
       product.name = name;
       product.price = price;
     }

     return products;
   });

   this.setState({products});
  }

  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        <AddItem addProducts={this.addProducts} />
        {this.state.products.map(product => {
          return (
            <div>
              <ProductItem
                key={product.name}
                {...product}
                deleteProducts={this.deleteProducts}
                editSubmit={this.editSubmit}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

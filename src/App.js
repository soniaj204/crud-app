import React, { Component } from "react";
import FormPost from "./components/FormPost/FormPost";
import Posts from "./components/Posts/Posts";

class App extends Component {
  constructor() {
    super();

    this.state = {
     
    };
  }

  render() {
    return (
      <div className="App">
        <h1>CRUD Application</h1>
        <FormPost />
        <Posts />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mg Mg",
      count: 0,
    };
  }

  componentDidMount(){
    console.log("Mounted");
  }

  componentDidUpdate()

  changeName = () => {
    this.setState((prev) => {
      return { name: prev.name + (Math.floor(Math.random() * 10) + 1) };
    });
  };

  changeCount = () => {
    this.setState(prev => {
      return {count: prev.count + 1}
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.changeCount}>Click me</button>
      </div>
    );
  }
}

export default Test;

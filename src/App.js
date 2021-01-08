import React, { Component } from "react";
import ChildComponentOne from "./ChildComponentOne";
import ChildComponentTwo from "./ChildComponentTwo";
export default class App extends Component {
  state = {
    counterOne: 0,
    counterTwo: 0,
    counterThree: 0
  };

  handleCounterOne = () => {
    this.setState({ counterOne: this.state.counterOne + 1 });
  };

  handleCounterTwo = () => {
    this.setState({ counterTwo: this.state.counterTwo + 1 });
  };

  render() {
    return (
      <div>
        <ChildComponentOne
          counterOne={this.state.counterOne}
          handleCounterOne={this.handleCounterOne}
          handleCounterTwo={this.handleCounterTwo}
        />
        <ChildComponentTwo
          counterTwo={this.state.counterTwo}
          handleCounterOne={this.handleCounterOne}
          handleCounterTwo={this.handleCounterTwo}
        />
      </div>
    );
  }
}

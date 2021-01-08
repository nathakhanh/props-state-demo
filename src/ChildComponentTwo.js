import React, { Component } from "react";

export default class ChildComponentTwo extends Component {
  render() {
    return (
      <>
        <div>{`Child 2 counter: ${this.props.counterTwo}`}</div>
        <button onClick={this.props.handleCounterTwo}>increment child 2</button>
        <button onClick={this.props.handleCounterOne}>increment child 1</button>
      </>
    );
  }
}

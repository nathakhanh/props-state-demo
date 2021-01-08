import React from "react";

export default function ChildComponentOne(props) {
  return (
    <div>
      <div>{`Child 1 counter: ${props.counterOne}`}</div>
      <button onClick={props.handleCounterOne}>increment child 1</button>
      <button onClick={props.handleCounterTwo}>increment child 2</button>
    </div>
  );
}

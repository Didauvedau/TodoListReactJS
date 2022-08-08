import React, { useReducer, useState } from "react";

//useState:
// - 1. Init State: 0
// - 2. Actions: Up(state + 1) / Down(state - 1)

//useReducer:
// - 1. Init State: 0
// - 2. Actions: Up(state + 1) / Down(state - 1)
// - 3. Reducer
// - 4. Dispatch

//Init State
const initState = 0;

//Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  console.log("reducer is running");

  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Underfine this action");
  }
};

const ReducerParent = () => {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div className="container">
      <div className="m-3 d-flex flex-column flex-wrap-2">
        <h1>{count}</h1>
        <button
          className="btn btn-outline-warning mb-2"
          onClick={() => dispatch(UP_ACTION)}
        >
          Up
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(DOWN_ACTION)}
        >
          Down
        </button>
      </div>
    </div>
  );
};

export default ReducerParent;

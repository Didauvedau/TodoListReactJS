import React, { useState } from "react";
import ReactMemo from "./ReactMemo";

const Count = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <ReactMemo value={count} />
      <h1>{count}</h1>
      <button className="btn btn-outline-primary" onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default Count;

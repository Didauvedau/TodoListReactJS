import React, { useCallback, useState } from "react";
import Call from "./Call";

const Count = () => {
  const [count, setCount] = useState(0);

  //useCallback(hàm xử lí,[deps]) 

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  },[]);

  return (
    <div className="container">
      <h1>{count}</h1>
      <Call onIncrease={increase} />
    </div>
  );
};

export default Count;

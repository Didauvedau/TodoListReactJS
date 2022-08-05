import React, { useRef, useState } from "react";

const CountUseRef = () => {
  const [count, setCount] = useState(60);

  //cập nhật giá trị hiện tại của state
  //khởi tạo giá trị ban đầu trong ()
  let timeId = useRef();

  //luôn luôn .current mỗi khi cập nhật giá trị của biến useRef()
  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleEnd = () => {
    clearInterval(timeId.current);
  };

  return (
    <div className="container m-3">
      <h3>{count}</h3>
      <button onClick={handleStart} className="btn btn-outline-primary">
        Start
      </button>
      <button onClick={handleEnd} className="btn btn-outline-secondary ms-2">
        End
      </button>
    </div>
  );
};

export default CountUseRef;

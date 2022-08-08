import React, { useEffect, useRef, useState } from "react";

const CountUseRef = () => {
  const [count, setCount] = useState(60);

  //cập nhật giá trị hiện tại của state
  //khởi tạo giá trị ban đầu trong ()
  const timeId = useRef();

  const h3UseRef = useRef();

  //luôn luôn .current mỗi khi cập nhật giá trị của biến useRef()
  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  useEffect(() => {
    /* getBoundingClientRect()
      lâý ra toạ độ(bottom, height,left,right,top,width,x,y) 
      hiện tại của element*/
    const rect = h3UseRef.current.getBoundingClientRect();

    h3UseRef.current.classList.add("text-info");
    h3UseRef.current.classList.add("fontSize");
    h3UseRef.current.classList.add("border");
    h3UseRef.current.classList.add("border-bottom-0");
    h3UseRef.current.classList.add("border-dark");
  });

  const handleEnd = () => {
    clearInterval(timeId.current);
  };

  return (
    <div className="container m-3">
      <h3 ref={h3UseRef}>{count}</h3>
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

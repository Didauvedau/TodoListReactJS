import React, { useState } from "react";

const bills = [100, 200, 300];

const First = () => {
  //   const [state, setState] = useState(initState);
  // Đưa một giá trị đã được tính toán vào trong giá
  // trị khởi tạo của state để giảm bớt công việc lúc re-render lại trang.
  const [counter, setCounter] = useState(() => {
    const all = bills.reduce((all, cur) => all + cur);

    // console.log(all);

    return all;
  });

  const [counterCallBack, setCounterCallBack] = useState(1);

  const [info, setInfo] = useState({
    name: "nguyen van a",
    address: "da nang",
    age: 27,
  });

  const handleChangeInfo = () => {
    setInfo({
      ...info,
      bio: "Yeu mau xanh",
    });
  };

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleCallBackCounter = () => {
    //prevCounter lấy(copy) giá trị của state hiện tại
    // gộp toàn bộ rồi xử lí 1 lần xong re-render lại trang
    setCounterCallBack((prevCounter) => prevCounter + 1);
    setCounterCallBack((prevCounter) => prevCounter + 1);
    setCounterCallBack((prevCounter) => prevCounter + 1);
    console.log("re-render");
  };

  return (
    <div className="container">
      <div className="m-3 p-3 border border-primary">
        <h1>Counter: {counter}</h1>
        <button className="btn btn-outline-success" onClick={handleIncrease}>
          Increase
        </button>
      </div>
      <div className="m-3 p-3 border border-primary">
        <h1>Counter: {counterCallBack}</h1>
        <button
          className="btn btn-outline-success"
          onClick={handleCallBackCounter}
        >
          Increase
        </button>
      </div>
      <div className="m-3 p-3 border border-primary">
        <h1>Info: {JSON.stringify(info)}</h1>
        <button className="btn btn-outline-success" onClick={handleChangeInfo}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default First;

import React, { memo } from "react";

// memo => Highter Order Component
// memo bậc cao hơn so với Hooks để bao bọc toàn bộ functional component
// memo để re-render lại functional component khi mà có giá trị props bị thay đổi
const ReactMemo = (props) => {
  console.log("re-render");
  return (
    <div className="container">
      <h1 className="m-3">Hello AE {props.value}</h1>
    </div>
  );
};

export default memo(ReactMemo);

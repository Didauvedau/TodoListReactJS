import React, { memo } from "react";

const Call = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <div className="container m-3">
      <button className="btn btn-outline-primary" onClick={onIncrease}>
        Increase
      </button>
    </div>
  );
};

export default memo(Call);

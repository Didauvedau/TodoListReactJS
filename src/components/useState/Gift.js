import React, { useState } from "react";

const gifts = ["Iphone", "Macbook", "Camera", "Ipod"];

const Gift = () => {
  const [bonus, setBonus] = useState("");

  const handleChange = () => {
    setBonus(() => {
      const gidtLength = gifts.length;

      let get = gifts[Math.floor(Math.random() * gidtLength)];

      return get;
    });
  };

  return (
    <div className="container">
      <div className="m-4">
        <h4>{bonus || "Chua co phan thuong"}</h4>
        <button className="btn btn-outline-warning" onClick={handleChange}>
          GET BONUS
        </button>
      </div>
    </div>
  );
};

export default Gift;

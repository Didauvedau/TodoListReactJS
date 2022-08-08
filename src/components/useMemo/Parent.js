import React, { useMemo, useRef, useState } from "react";
import Children from "./Children";

const Parent = () => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [products, setProducts] = useState([]);

  const refName = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    setName("");
    setPrice("");
    refName.current.focus();
  };

  //   nếu mảng rỗng thì trả về 0
  //   const total = products.reduce(
  //     (
  //     count, value) => count + value.price,
  //     0
  //     );

  const total = useMemo(() => {
    const result = products.reduce((count, value) => {
      console.log("re count...");
      return count + value.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="container m-3 d-flex flex-column">
      <div className="m-2 d-flex flex-column">
        <input
          className="p-1 mb-2"
          ref={refName}
          type="text"
          value={name}
          placeholder="Enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-1 mb-2"
          type="text"
          value={price}
          placeholder="Enter price..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn btn-outline-success" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div className="m-2 w-50 d-flex flex-column">
        <h2>Total : {total || ""}</h2>
        <ol className="list-group">
          {products.map((product, index) => (
            <li
              className="list-group-item list-group-item-info m-2"
              key={index}
            >
              {product.name} - {product.price}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Parent;

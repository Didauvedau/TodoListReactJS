import React, { useState } from "react";

//Two-way binding

//Response from API
const courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

const Bind = () => {
  const [name, setName] = useState("");

  const [checked, setChecked] = useState(1);

  const [checkBox, setCheckBox] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    courses.map((value) => {
      return value.id === checked ? alert("Ban da chon : " + value.name) : "";
    });
  };

  const handleCheckBox = (id) => {
    setCheckBox((prev) => {
      if (prev.includes(id)) {
        return checkBox.filter((checkId) => checkId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  //   console.log(checkBox);
  return (
    <div className="container">
      <div className=" m-3 d-flex flex-column align-items-start ">
        <input className="mb-3" type="text" onChange={handleChange} />
        <h2 style={{ color: "#cd025c" }}>Radio Check Box</h2>
        {courses.map((course) => (
          <div key={course.id} className="d-flex">
            <input
              className="mb-3"
              checked={checked === course.id}
              type="radio"
              onChange={() => setChecked(course.id)}
            />
            <p className="ms-2">{course.name}</p>
          </div>
        ))}
        <button className="btn btn-outline-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="border p-4 m-4 d-flex flex-column align-items-start ">
        <h2 style={{ color: "#a79de8" }}>Check Box</h2>
        {courses.map((course) => (
          <div key={course.id} className="d-flex">
            <input
              className="mb-3"
              checked={checkBox.includes(course.id)}
              type="checkbox"
              onChange={() => handleCheckBox(course.id)}
            />
            <p className="ms-2">{course.name}</p>
          </div>
        ))}
        <button className="btn btn-outline-primary mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Bind;

import React, { useReducer, useRef } from "react";

//1. Init State

//2. Actions (Luôn viết hoac và cách nhau bằng dấu _)
import { setJob, addJob, deleteJob } from "./todoActions";

//3. reducer
import reducer, { initState } from "./reducerOfTodo";

//4. dispatch

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const inputRef = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h3>Todo</h3>

      <div className="m-2">
        <input
          type="text"
          ref={inputRef}
          value={job}
          placeholder="Enter work..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <div className="btn btn-outline-info ms-1" onClick={handleSubmit}>
          Add
        </div>
      </div>
      <div className="m-2">
        <ul className="list-group align-items-center">
          {jobs.map((job, index) => (
            <li className="list-group-item mt-1" key={index}>
              {job}{" "}
              <span
                className="text-danger fs-2 ms-2"
                onClick={() => dispatch(deleteJob(index))}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoReducer;

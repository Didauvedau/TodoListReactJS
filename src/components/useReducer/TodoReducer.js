import React, { useReducer, useRef } from "react";

//1. Init State
const initState = {
  job: "",
  jobs: [],
};
//2. Actions (Luôn viết hoac và cách nhau bằng dấu _)
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

console.log(setJob());

//3. reducer
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("PrevState", state);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid Chosen");
  }
  console.log("newState", newState);

  return newState;
};

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
        <ul className="list-group">
          {jobs.map((job, index) => (
            <li className="list-group-item" key={index}>
              {job}{" "}
              <span
                className="text-danger fs-3"
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

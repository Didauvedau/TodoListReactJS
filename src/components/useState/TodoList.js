import React, { useEffect, useRef, useState } from "react";

const TodoList = () => {
  const inputRef = useRef();

  const [job, setJob] = useState("");

  const [listJob, setListJob] = useState(() => {
    //Lấy dữ liệu từ localstorage
    const storageData = JSON.parse(localStorage.getItem("ListJob"));
    return storageData || [];
  });

  const submitChange = () => {
    setListJob((prev) => {
      const newListJob = [...prev, job];
      //Lưu Dữ Liệu Vào Trong Local Storage
      const jsonListJob = JSON.stringify(newListJob);
      localStorage.setItem("ListJob", jsonListJob);

      return newListJob;
    });

    setJob("");

    inputRef.current.focus();
  };

  const deleteJob = (item) => {
    setListJob((prev) => prev.filter((value) => value !== item));

    const oldListJob = listJob;

    const jsonListJob = JSON.stringify(
      oldListJob.filter((value) => value !== item)
    );

    localStorage.setItem("ListJob", jsonListJob);
  };

  useEffect(() => {});

  return (
    <div className="container border mb-5">
      <div className="m-3">
        <input
          type="text"
          ref={inputRef}
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Nhap Cong Viec"
        />
        <button onClick={submitChange} className="ms-2 btn btn-outline-success">
          Add
        </button>
        <div className="m-2">
          <ol className="list-group list-group-numbered">
            {listJob.map((job, index) => (
              <li key={index} className="list-group-item">
                {job}
                <button
                  //function nếu có tham số thì thêm bọc ngoài
                  onClick={() => deleteJob(job)}
                  className="ms-3 btn btn-danger"
                >
                  Xoa
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

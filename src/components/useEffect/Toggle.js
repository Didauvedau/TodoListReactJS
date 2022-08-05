import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Content from "./Content";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // cleanup image
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    // console.log(file.preview);

    setAvatar(file);
  };

  useEffect(() => {
    if (!toggle) {
      document.title = "React App";
    }
  }, [toggle]);

  return (
    <div className="container mt-3 d-flex flex-column">
      <div className="d-flex justify-content-evenly">
        <button
          className="w-25 h-25 btn btn-success"
          onClick={() => setToggle(!toggle)}
        >
          Open
        </button>
        <div className="input-image add-image d-flex ms-2">
          <input
            className={`${avatar && "h-50"}`}
            type="file"
            onChange={handlePreviewAvatar}
          />
          {avatar && (
            <img
              className="ms-2 border border-primary p-2"
              src={avatar.preview}
              alt=""
              width="80"
              height="70"
            />
          )}
        </div>
      </div>

      {toggle && <Content />}
    </div>
  );
};

export default Toggle;

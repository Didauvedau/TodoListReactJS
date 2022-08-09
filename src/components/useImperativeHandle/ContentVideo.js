import React, { useRef } from "react";
import Video from "./Video";

const ContentVideo = () => {
  const videoRef = useRef();


  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="container m-2">
      <Video ref={videoRef} />
      <button className="btn btn-outline-primary mt-2" onClick={handlePlay}>
        Play
      </button>
      <button className="btn btn-outline-danger mt-2" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
};

export default ContentVideo;

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import video1 from "../../videos/video-1.mp4";

const Video = (props, ref) => {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return (
    <div className="container">
      <video ref={videoRef} width="250px" height="250px" src={video1} />
    </div>
  );
};

export default forwardRef(Video);

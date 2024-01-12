import React, { useEffect, useRef } from "react";
import "./style.css";
export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      <div ref={ref} id="video-grid"></div>
    </div>
  );
};

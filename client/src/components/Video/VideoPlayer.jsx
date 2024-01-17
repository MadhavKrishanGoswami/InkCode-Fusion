import React, { useEffect, useRef } from "react";
//import "./Video.css";
export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div
      className="grid rounded-[2.5rem] overflow-hidden md:h[10vw] lg:h-[11vw]"
      ref={ref}
    ></div>
  );
};

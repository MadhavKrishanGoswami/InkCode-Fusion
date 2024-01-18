import React, { useEffect, useRef } from "react";
//import "./Video.css";
export const VideoPlayer = ({ user, userName }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div
      className="grid rounded-[1rem] overflow-hidden md:h[12vw] lg:h-[11vw] lg:w-[16vw]"
      ref={ref}
    ></div>
  );
};

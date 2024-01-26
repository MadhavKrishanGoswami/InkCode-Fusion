import React, { useEffect, useState } from "react";
import meetingpng from "../../pages/Assets/images/meeting-logo.png";
const date = new Date();

const MeetingTitle = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative flex items-center py-6 ml-[1.7vw] mb-4 mt-[1.2vw] w-[26%] h-[10.4vh] rounded-[18px] bg-lightGrey border border-Border shadow-md shadow-black">
      <img
        src={meetingpng}
        alt="meeting"
        className="meetingpng absolute h-[2.6vw] w-[2.7vw] ml-[1.8vw]"
      />
      <div class="absolute w-0.5 h-[3vw] ml-[5.7vw] bg-lightergrey"></div>
      <h1
        contenteditable="true"
        className="absolute ml-[6.7vw] text-darkGrey top-[0.9vw] font-Inter text-[1.2vw] font-medium"
      >
        Interview(Technical Round)
      </h1>
      <h2 className="absolute py-1 text-gray-500 font-Inter text-[1.1vw] top-[2.7vw] text-DTgrey ml-[6.5vw] font-medium">
        {" "}
        {date.toLocaleString("default", { month: "long" })} {date.getDate()}
        th, {date.getFullYear()} | {currentTime.getHours()}:
        {currentTime.getMinutes() < 10
          ? "0" + currentTime.getMinutes()
          : currentTime.getMinutes()}{" "}
        {currentTime.getHours() >= 12 ? "PM" : "AM"}{" "}
      </h2>
    </div>
  );
};
export default MeetingTitle;

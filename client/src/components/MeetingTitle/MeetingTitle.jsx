import React from "react";
//import "./style.css";
import meetingpng from "../../pages/Assets/images/meeting-logo.png";
const date = new Date();

const MeetingTitle = () => {
  return (
    <div className="meeting-name relative flex items-center py-6 ml-[1.7vw] mb-3 mt-[1.2vw] w-[26%] h-[10.4vh] rounded-[18px] bg-lightGrey border border-Border">
      <img
        src={meetingpng}
        alt="meeting"
        className="meetingpng absolute h-[2.6vw] w-[2.7vw] ml-[1.8vw]"
      />
      <div class="meeting-line absolute w-0.5 h-[3vw] ml-[5.7vw] bg-lightergrey"></div>
      <h1 className="meeting-name-text absolute ml-[6.7vw] text-darkGrey top-[1vw] font-Inter text-[1.2vw] font-medium">
        Interview(Technical Round)
      </h1>
      <h2 className="meeting-date-time absolute py-1 text-gray-500 font-Inter text-[1.1vw] top-[2.4vw] text-DTgrey ml-[6.6vw] font-medium">
        {" "}
        {date.toLocaleString("default", { month: "long" })} {date.getDate()}
        th, {date.getFullYear()} | {date.getHours()}:{date.getMinutes()}{" "}
        {date.getHours() >= 12 ? "PM" : "AM"}{" "}
      </h2>
    </div>
  );
};
export default MeetingTitle;

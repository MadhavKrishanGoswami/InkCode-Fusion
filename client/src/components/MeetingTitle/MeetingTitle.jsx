import React from "react";
import "./style.css";
import meetingpng from "../../pages/Assets/images/meeting-logo.png";
const date = new Date();

const MeetingTitle = () => {
  return (
    <div className="meeting-name">
      <img src={meetingpng} alt="meeting" className="meetingpng" />
      <div class="meeting-line"></div>
      <h1 className="meeting-name-text">Interview(Technical Round)</h1>
      <h2 className="meeting-date-time">
        {" "}
        {date.toLocaleString("default", { month: "long" })} {date.getDate()}
        th, {date.getFullYear()} | {date.getHours()}:{date.getMinutes()}{" "}
        {date.getHours() >= 12 ? "PM" : "AM"}{" "}
      </h2>
    </div>
  );
};
export default MeetingTitle;

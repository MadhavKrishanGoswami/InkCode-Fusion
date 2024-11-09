import React, { useEffect, useState } from "react";
import meetingpng from "../../assets/images/meeting-logo.png";
import ACTIONS from "../../Actions";
const date = new Date();

const MeetingTitle = ({ socket, roomId }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [title, setTitle] = useState("Interview(Technical Round)");

  useEffect(() => {
    if (socket) {
      // Listen for title updates from the server
      socket.on(ACTIONS.TITLE_CHANGE, ({ title }) => {
        setTitle(title); // Update the title with the new value
      });
    }
  }, [socket, roomId]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.textContent;
    setTitle(newTitle);
    if (socket && roomId) {
      socket.emit(ACTIONS.TITLE_CHANGE, { roomId, title: newTitle });
    }
  };

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
        suppressContentEditableWarning={true}
        onBlur={handleTitleChange}
        className="absolute ml-[6.7vw] text-darkGrey top-[0.9vw] font-Inter text-[1.2vw] font-medium"
      >
        {title}
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

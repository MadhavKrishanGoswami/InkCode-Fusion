import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import "./JoinRoomForm.css";

const JoinRoomForm = () => {
  // State variables to store user input
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  // Hook to enable navigation in React
  const navigate = useNavigate();

  // Function to handle room joining
  const joinRoom = (e) => {
    e.preventDefault();
    // Validate user input
    if (!userName || !roomId) {
      toast.error("Please enter your Name & Room id");
      return;
    }
    // Redirect user to the specified room with the given username
    navigate(`/room/${roomId}`, { state: { userName } });
  };
  // Function to handle enter key press
  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      joinRoom(e);
    }
  };

  return (
    <form
      className="join-room-form flex flex-col justify-center items-center relative gap-x-[8vw] 
    top-[8vw]"
    >
      <div className="input flex flex-col gap-y-[3.5vw]">
        <input
          type="text"
          className="flex flex-col h-[3.4vw] w-[25vw] pl-6 flex-shrink-0 rounded-[12.79px] border-[1.827px] 
          border-solid border-LightBorder font-Syne text-[0.9vw] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
        <input
          type="text"
          className="flex flex-col h-[3.4vw] w-[25vw] pl-6 flex-shrink-0 rounded-[12.79px] border-[1.827px] 
          border-solid border-LightBorder font-Syne text-[0.9vw] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter room code"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
        />
      </div>
      <button
        onClick={joinRoom}
        className="JoinButton flex relative justify-center items-center flex-shrink-0 top-[5vw]
        w-[19vw] h-[9vh] text-white font-Syne text-3xl font-normal font-500 leading-normal transition duration-300 ease-in-out transform hover:scale-105 rounded-full bg-mustard"
      >
        Join Room
      </button>
    </form>
  );
};
export default JoinRoomForm;

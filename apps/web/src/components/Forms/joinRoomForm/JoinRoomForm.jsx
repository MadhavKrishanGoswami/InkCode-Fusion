import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
      className="flex flex-col justify-center items-center relative gap-x-[8vw] 
    top-[8vw]"
    >
      <div className="flex flex-col gap-y-[3.5vw]">
        <input
          type="text"
          className="flex flex-col h-[3.4vw] w-[25vw] pl-5 flex-shrink-0 rounded-3xl border-[1.827px] 
          border-solid border-darkGrey font-[Poppins] text-[1rem] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
        <input
          type="text"
          className="flex flex-col h-[3.4vw] w-[25vw] pl-5 flex-shrink-0 rounded-3xl border-[1.827px] 
          border-solid border-darkGrey font-[Poppins] text-[1rem] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter room code"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
        />
      </div>
      <button
        onClick={joinRoom}
        className="flex relative justify-center items-center flex-shrink-0 top-[5vw]
        px-8 py-2 text-White font-[Poppins] text-2xl font-medium font-500 leading-normal shadow-md shadow-black transition duration-300 ease-in-out transform hover:scale-105 rounded-3xl bg-none border-4 border-DTgrey"
      >
        Join Room
      </button>
    </form>
  );
};
export default JoinRoomForm;

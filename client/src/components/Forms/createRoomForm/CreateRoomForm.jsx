import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import "./CreateRoomForm.css";
const CreateRoomForm = () => {
  // State variables to store user input and room ID
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  // Hook to enable navigation in React
  const navigate = useNavigate();

  // Function to generate a new room ID
  const createNewRoom = () => {
    const id = uuidv4();
    setRoomId(id);
    toast.success("New Room Id Generated");
  };

  // Function to handle room creation and joining
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
    e.preventDefault();
    if (e.key === "Enter") {
      joinRoom(e);
    }
  };
  const copyRoomId = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(roomId);
    toast.success("Room Id copied");
  };

  return (
    <form
      className="CreateRoomForm flex flex-col items-center justify-center relative gap-x-[8vw] 
    top-[8vw] "
    >
      <div className="input flex flex-col gap-y-[3.5vw]">
        <input
          type="text"
          className="form-input flex flex-col h-[3.4vw] w-[25vw] pl-6 flex-shrink-0 rounded-[12.79px] border-[1.827px] 
          border-solid border-LightBorder font-Syne text-[0.9vw] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
        <div className="Generate-room flex flex-col">
          <div className="input-wrapper relative inline-flex items-center ">
            <div className="form-input-container relative inline-flex items-center">
              <input
                type="text"
                className="form-input h-[3.4vw] w-[25vw] flex flex-col pl-6 flex-shrink-0 rounded-[12.79px] 
                border-[1.827px] border-solid border-LightBorder text-ALightgrey font-Syne text-[0.9vw]
                font-normal font-500 leading-normal bg-StartBg"
                disabled
                placeholder="Generate room code"
                value={
                  roomId.length > 10 ? roomId.substring(0, 19) + "..." : roomId
                }
                onKeyUp={handleInputEnter}
              />
              <button
                onClick={copyRoomId}
                className="copy-btn flex text-white absolute font-Inter right-32 text-14 font-normal
                 font-400 leading-normal"
              >
                Copy
              </button>
              <button
                className="Generate-btn flex absolute items-center justify-center right-4 text-white font-Inter text-14 w-24 h-10
                font-normal font-400 leading-normal rounded-[45px] flex-shrink-0 bg-mustard"
                type="button"
                onClick={createNewRoom}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="CreateButton flex relative justify-center items-center flex-shrink-0 top-[5vw]
         w-[19vw] h-[9vh] text-white font-Syne text-3xl font-normal font-500 leading-normal rounded-full bg-mustard"
        onClick={joinRoom}
      >
        Create Room
      </button>
    </form>
  );
};
export default CreateRoomForm;

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import "./CreateRoomForm.css";
const CreateRoomForm = () => {
  // State variables to store user input and room ID
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Hook to enable navigation in React
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  // Function to calculate the maximum length of the displayed room ID based on screen size
  const calculateMaxLength = () => {
    if (windowWidth >= 1600) {
      return 30;
    } else if (windowWidth >= 1500) {
      return 25;
    } else if (windowWidth >= 1400) {
      return 20;
    } else if (windowWidth >= 1300) {
      return 15;
    } else if (windowWidth >= 1200) {
      return 10;
    } else if (windowWidth >= 1000) {
      return 8;
    } else {
      return 4;
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center relative gap-x-[8vw] 
    top-[8vw] "
    >
      <div className="input flex flex-col gap-y-[3.5vw]">
        <input
          type="text"
          className="flex flex-col h-[3.4vw] w-[25vw] pl-5 flex-shrink-0 rounded-3xl border-[1.827px] 
          border-solid border-darkGrey font-Syne text-[1rem] font-normal font-500 
          leading-normal bg-StartBg text-ALightgrey"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
        
        <div className="flex flex-col">
          <div className="relative inline-flex items-center ">
            <div className="relative inline-flex items-center">
              <input
                type="text"
                className="h-[3.4vw] w-[25vw] flex flex-col pl-5 flex-shrink-0 rounded-3xl 
                border-[1.827px] border-solid border-darkGrey text-ALightgrey font-[Poppins] text-[1rem]
                font-normal leading-normal bg-StartBg"
                disabled
                placeholder="Generate room code"
                value={
                  roomId.length > 10
                    ? roomId.substring(0, calculateMaxLength()) + "..."
                    : roomId
                }
                onKeyUp={handleInputEnter}
              />
              {roomId?
              <button
                onClick={copyRoomId}
                className="flex py-1.5 px-3 bg-StartBg rounded text-White absolute font-[Poppins] right-[7.5vw] font-normal leading-normal"
              >
                Copy
              </button>
              :null
              }
              <button
                className="flex absolute items-center py-1.5 px-3 justify-center right-[1vw] text-White font-[Poppins] text-14
                font-normal font-400 leading-normal rounded-3xl flex-shrink-0 transition duration-300 ease-in-out transform hover:scale-105 bg-none border border-mustard"
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
        className="flex relative justify-center items-center flex-shrink-0 top-[5vw]
         px-8 py-2 text-White font-[Poppins] text-2xl font-medium font-500 leading-normal rounded-3xl bg-none border-4 border-DTgrey transition duration-300 ease-in-out transform hover:scale-105 shadow-md shadow-black"
        onClick={joinRoom}
      >
        Create Room
      </button>
    </form>
  );
};
export default CreateRoomForm;

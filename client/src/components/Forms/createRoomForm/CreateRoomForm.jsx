import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./CreateRoomForm.css";
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
    <form className="CreateRoomForm">
      <div className="input">
        <input
          type="text"
          className="form-input"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
        <div className="Generate-room">
          <div className="input-wrapper">
            <div className="form-input-container">
              <input
                type="text"
                className="form-input generate-input"
                disabled
                placeholder="Generate room code"
                value={
                  roomId.length > 10 ? roomId.substring(0, 19) + "..." : roomId
                }
                onKeyUp={handleInputEnter}
              />
              <button onClick={copyRoomId} className="copy-btn">
                Copy
              </button>
              <button
                className="Generate-btn"
                type="button"
                onClick={createNewRoom}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="CreateButton" onClick={joinRoom}>
        Create Room
      </button>
    </form>
  );
};
export default CreateRoomForm;

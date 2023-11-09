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
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter room code"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
        />
      </div>
      <button
        className="mt-4 btn-primary btn-block form-control"
        onClick={joinRoom}
      >
        Join Room
      </button>
    </form>
  );
};
export default JoinRoomForm;

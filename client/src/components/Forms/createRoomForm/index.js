import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div className="form-group border">
        <div className="input-group d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control my-2 border-0"
            disabled
            placeholder="Generate room code"
            value={roomId}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={createNewRoom}
            >
              Generate
            </button>
            <button className="btn btn-outline-danger btn-sm">copy</button>
          </div>
        </div>
      </div>
      <button
        className="mt-4 btn-primary btn-block form-control"
        onClick={joinRoom}
      >
        Create Room
      </button>
    </form>
  );
};
export default CreateRoomForm;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

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

  return (
    <form className="form col-md-12 mt-5 px-2" >
      <div className="form-group "data-bs-theme="dark">
        <Form.Control
          type="text"
          size="lg"
          className="form-control my-3"
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />
      </div>
      <div className="form-group "data-bs-theme="dark">
        <div className="input-group d-flex align-items-center justify-content-center"data-bs-theme="dark">
          <Form.Control
            type="text"
            size="lg"
            className="form-control my-3"
            placeholder="Room ID"
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <div className="">
            <button
              className="btn btn-dark"
              type="button"
              onClick={createNewRoom}
            >
              Generate
            </button>
            <button className="btn btn-secondary btn-link btn-sm">copy</button>
          </div>
        </div>
      </div>
      <button
        className=" CreateButton mx-auto mt-12 my-3"
        onClick={joinRoom}
      >
        Create Room
      </button>
    </form>
  );
};
export default CreateRoomForm;


import React, { useState } from "react";
import Chat from "../Chats/Chats";
import People from "../People/people";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import "./style.css";

const MountComponents = ({ socket, roomId, userName }) => {
  const [showChat, setShowChat] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const handleShowChat = () => {
    setShowChat(!showChat);
  };
  const handleShowPeople = () => {
    setShowPeople(!showPeople);
  };

  return (
    <div>
      <div className="controls">
        <IconButton>
          <ChatIcon style={{ fill: "#FFFFFF" }} onClick={handleShowChat} />
        </IconButton>
        <IconButton>
          <PeopleIcon style={{ fill: "#FFFFFF" }} onClick={handleShowPeople} />
        </IconButton>
      </div>
      <div className={`component-wrapper ${showChat ? "visible" : ""}`}>
        <Chat
          socket={socket}
          roomId={roomId}
          userName={userName}
          setShowChat={setShowChat}
        />
      </div>
      <div className={`component-wrapper ${showPeople ? "visible" : ""}`}>
        <People
          roomId={roomId}
          socket={socket}
          setShowPeople={handleShowPeople}
          userName={userName}
        />
      </div>
    </div>
  );
};

export default MountComponents;

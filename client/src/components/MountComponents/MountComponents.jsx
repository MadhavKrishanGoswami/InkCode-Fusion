import React, { useState } from "react";
import Chat from "../Chats/Chats";
import People from "../People/people";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import SecurityIcon from "@mui/icons-material/Security";
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
          <ChatIcon
            style={{ fill: "#FFFFFF" }}
            onClick={handleShowChat}
            className="scale-101"
          />
        </IconButton>
        <IconButton>
          <PeopleIcon
            style={{ fill: "#FFFFFF" }}
            onClick={handleShowPeople}
            className="scale-101"
          />
        </IconButton>
        <IconButton>
          <SecurityIcon style={{ fill: "#FFFFFF" }} className="scale-101" />
        </IconButton>
      </div>
      <Chat
        socket={socket}
        roomId={roomId}
        userName={userName}
        setShowChat={setShowChat}
        isVisible={showChat}
      />
      <People
        roomId={roomId}
        socket={socket}
        setShowPeople={handleShowPeople}
        userName={userName}
        isVisible={showPeople}
      />
    </div>
  );
};

export default MountComponents;

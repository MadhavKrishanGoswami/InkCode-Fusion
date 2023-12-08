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

  return (
    <div>
      <div className="controls">
        <IconButton>
          <ChatIcon
            style={{ fill: "#FFFFFF" }}
            onClick={() => (showChat ? setShowChat(false) : setShowChat(true))}
          />
        </IconButton>
        <IconButton>
          <PeopleIcon
            style={{ fill: "#FFFFFF" }}
            onClick={() =>
              showPeople ? setShowPeople(false) : setShowPeople(true)
            }
          />
        </IconButton>
      </div>

      {showChat ? (
        <Chat
          socket={socket}
          roomId={roomId}
          userName={userName}
          setShowChat={setShowChat}
        />
      ) : (
        ""
      )}

      {showPeople ? (
        <People roomId={roomId} socket={socket} setShowPeople={setShowPeople} />
      ) : (
        ""
      )}
    </div>
  );
};

export default MountComponents;

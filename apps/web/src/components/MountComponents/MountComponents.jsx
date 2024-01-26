import React, { useState } from "react";
import Chat from "../Chats/Chats";
import People from "../People/people";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import SecurityIcon from "@mui/icons-material/Security";
import toast from "react-hot-toast";
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
  const handleClick = () => {
    toast.success("Your connections are secure!", { duration: 2000 });
  };
  return (
    <div className="">
      <div className="flex absolute justify-center items-center gap-[1vw] top-[48vw] left-[89vw]">
        <div className="w-10 h-10 rounded-full hover:bg-Darkblue">
          <IconButton>
            <ChatIcon
              style={{ fill: "#FFFFFF" }}
              onClick={handleShowChat}
              className="scale-101"
            />
          </IconButton>
        </div>
        <div className="w-10 h-10 rounded-full hover:bg-Darkblue">
          <IconButton>
            <PeopleIcon
              style={{ fill: "#FFFFFF" }}
              onClick={handleShowPeople}
              className="scale-101 items-center justify-center"
            />
          </IconButton>
        </div>
        <div className="w-10 h-10 rounded-full hover:bg-Darkblue">
          <IconButton>
            <SecurityIcon
              style={{ fill: "#FFFFFF" }}
              className="scale-101"
              onClick={handleClick}
            />
          </IconButton>
        </div>
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

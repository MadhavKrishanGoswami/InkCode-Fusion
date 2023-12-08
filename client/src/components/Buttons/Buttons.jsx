import React, { useState } from "react";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "../Chats/Chats";
import People from "../People/people";
import "./style.css";
const Buttons = ({ leaveRoom }) => {
  return (
    <div className="buttons">
      <div className="butcontrol">
        <IconButton>
          <div className="leave" onClick={leaveRoom}>
            <span>Leave</span>{" "}
          </div>
        </IconButton>
      </div>
    </div>
  );
};

export default Buttons;

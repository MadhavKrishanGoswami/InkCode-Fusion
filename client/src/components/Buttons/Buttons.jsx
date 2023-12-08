import React from "react";
import { IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
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
      <div className="but">
        <IconButton>
          <ChatIcon style={{ fill: "#FFFFFF" }} />
        </IconButton>
        <IconButton>
          <PeopleIcon style={{ fill: "#FFFFFF" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Buttons;

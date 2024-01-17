import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import StopScreenShareRoundedIcon from "@mui/icons-material/StopScreenShareRounded";
import "./style.css";

const Buttons = ({ leaveRoom }) => {
  const [isScreenShareOn, setScreenShareOn] = useState(true);
  // Toggle screenshare state
  const toggleScreenShare = () => {
    setScreenShareOn((prevScreenShareState) => !prevScreenShareState);
  };
  const Whiteboard = () => {};
  return (
    <div className="buttons">
      <div className="butcontrol">
        <IconButton onClick={toggleScreenShare}>
          {isScreenShareOn ? (
            <ScreenShareRoundedIcon
              className="text-6xl"
              style={{ fill: "#FFFFFF" }}
            />
          ) : (
            <StopScreenShareRoundedIcon style={{ fill: "#FFFFFF" }} />
          )}
        </IconButton>
        <IconButton>
          <DrawRoundedIcon style={{ fill: "#FFFFFF" }} onClick={Whiteboard} />
        </IconButton>
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

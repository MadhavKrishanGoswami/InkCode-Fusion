import React, { useEffect, useState } from "react";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import { IconButton } from "@mui/material";

const Controls = ({
  toggleMic,
  toggleCamera,
  isCameraEnabled,
  isMicEnabled,
}) => {
  return (
    <div>
      <IconButton onClick={toggleMic}>
        {isMicEnabled ? (
          <MicRoundedIcon style={{ fill: "#FFFFFF" }} />
        ) : (
          <MicOffRoundedIcon style={{ fill: "#FFFFFF" }} />
        )}
      </IconButton>

      <IconButton onClick={toggleCamera}>
        {isCameraEnabled ? (
          <VideocamRoundedIcon style={{ fill: "#FFFFFF" }} />
        ) : (
          <VideocamOffRoundedIcon style={{ fill: "#FFFFFF" }} />
        )}
      </IconButton>
    </div>
  );
};
export default Controls;

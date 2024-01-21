import React from "react";
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
  leaveRoom,
}) => {
  return (
    <div>
      <IconButton onClick={toggleMic}>
        <div
          className={`flex w-[6vw] h-[6vh] justify-center items-center gap-0.5 rounded-[3.125rem] mr-1 ${
            isMicEnabled
              ? "bg-[#3C4043] shadow-md shadow-Darkblue  hover:bg-[#313538]"
              : "bg-[#EA4335] shadow-md shadow-Red hover:bg-[#c7463a]"
          }`}
        >
          {isMicEnabled ? (
            <MicRoundedIcon
              style={{ fill: "#FFFFFF" }}
              className="scale-[1.39]"
            />
          ) : (
            <MicOffRoundedIcon
              style={{ fill: "#FFFFFF" }}
              className="scale-[1.39]"
            />
          )}
        </div>
      </IconButton>

      <IconButton onClick={toggleCamera}>
        <div
          className={`flex w-[6vw] h-[6vh] justify-center items-center gap-0.5 rounded-[3.125rem] mr-1 ${
            isCameraEnabled
              ? "bg-[#3C4043] shadow-md shadow-Darkblue hover:bg-[#313538]"
              : "bg-[#EA4335] shadow-md shadow-Red hover:bg-[#c7463a]"
          }`}
        >
          {isCameraEnabled ? (
            <VideocamRoundedIcon
              style={{ fill: "#FFFFFF" }}
              className="scale-[1.39]"
            />
          ) : (
            <VideocamOffRoundedIcon
              style={{ fill: "#FFFFFF" }}
              className="scale-[1.39]"
            />
          )}
        </div>
      </IconButton>

      <IconButton>
        {" "}
        <div
          className="w-[7vw] h-[6vh] flex justify-center items-center flex-shrink-0 rounded-[73px] bg-[#ea4335] hover:bg-[#c7463a] shadow-md shadow-Darkblue text-[#ffffff] cursor-pointer font-Inter text-base font-normal ml-16"
          onClick={leaveRoom}
        >
          <span>Leave</span>{" "}
        </div>
      </IconButton>
    </div>
  );
};

export default Controls;

import React, { useState } from "react";
import Client from "./clients";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import IconButton from "@mui/material/IconButton";
import toast from "react-hot-toast";
import ACTIONS from "../../Actions";

const People = ({ roomId, socket, setShowPeople, userName, isVisible }) => {
  const [clients, setClients] = useState([]);
  socket.on(ACTIONS.JOINED, ({ clients, userName, socketId }) => {
    setClients(clients);
  });
  socket.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
    setClients((clients) =>
      clients.filter((client) => client.socketId !== socketId)
    );
  });
  const copyRoomId = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(
      userName +
        " Invited You To a InkCode Meeting 🚀:\n\nJoin the meeting at https://inkcode.io/\nRoomId ID: " +
        roomId
    );
    toast.success("Share the meeting invite with your friends! 🚀");
  };
  return (
    <div className="People-wrapper flex flex-col absolute z-50 left-[72%] top-[5%] w-1/4  h-[85%] flex-shrink-0 rounded-2xl bg-white ">
      <div className="Header flex w-full">
        <h1 className="PrivateRooms font-Roboto text-xl font-medium leading-normal">
          People
        </h1>
        <CloseIcon
          className="CloseIcon cursor-pointer ml-auto"
          onClick={() => setShowPeople(false)}
        />
      </div>
      <div className="addPeopl-div flex w-full ml-1 justify-between items-center">
        <IconButton>
          <div
            className="addframe flex flex-col h-full w-full"
            onClick={copyRoomId}
          >
            <PersonAddIcon />
            <h3 className="text-black font-Roboto text-lg font-normal leading-normal flex px-4 py-2 items-start">
              Add People
            </h3>
          </div>
        </IconButton>{" "}
        <div className="controlframe flex flex-col items-center p-2">
          <HdrStrongIcon style={{ fill: "#5F6368" }} />
          <h3 className="text-black font-Roboto text-lg font-normal leading-normal flex px-4 py-2 items-start">
            Room Controls
          </h3>
        </div>
      </div>
      <h1 className="Inroom text-gray-600 font-Roboto text-lg font-normal leading-normal pl-5">
        In room
      </h1>
      <div className="clients flex items-center pt-2 pb-3">
        {clients.map((client) => (
          <Client
            key={client.socketId}
            userName={client.userName}
            You={client.userName === userName}
          />
        ))}
      </div>
    </div>
  );
};

export default People;

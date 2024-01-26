import React, { useState } from "react";
import Client from "./clients";
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
    <div className={`${isVisible ? "visible" : "hidden"}`}>
      <div className="flex flex-col absolute z-50 right-[2%] top-[5%] w-[24%] max-w-sm h-[84%] shadow-xl shadow-black flex-shrink-0 rounded-2xl bg-White">
        {" "}
        <div className="p-6 pr-3 pb-1 pl-5 flex w-full">
          <span className="font-Roboto text-base font-medium leading-normal ml-1">
            People
          </span>
          <CloseIcon
            className="ml-auto cursor-pointer scale-120 mr-2"
            onClick={() => setShowPeople(false)}
          />
        </div>
        <div className=" mx-auto flex w-full justify-between items-center">
          <IconButton>
            <div
              className="p-[8px] flex flex-col h-full w-full items-center justify-center rounded-xl cursor-pointer"
              onClick={copyRoomId}
            >
              <PersonAddIcon className="scale-125" />
              <span className="text-black font-Roboto text-base  font-normal leading-normal flex px-4 py-3 items-start">
                Add People
              </span>
            </div>
          </IconButton>{" "}
          <div className="flex flex-col items-center p-2 mr-10">
            <HdrStrongIcon style={{ fill: "#5F6368" }} className="scale-125" />
            <span className="text-black font-Roboto text-base font-normal leading-normal flex  py-3 items-start">
              Room Controls
            </span>
          </div>
        </div>
        <span className="text-gray-600 font-Roboto text-base font-normal leading-normal pl-5">
          In room
        </span>
        <div className="items-center pt-2 pb-3">
          {clients.map((client) => (
            <Client
              key={client.socketId}
              userName={client.userName}
              You={client.userName === userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;

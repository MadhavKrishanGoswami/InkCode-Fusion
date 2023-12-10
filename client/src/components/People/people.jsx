import React, { useState } from "react";
import Client from "./clients";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import IconButton from "@mui/material/IconButton";
import toast from "react-hot-toast";
import ACTIONS from "../../Actions";

const People = ({ roomId, socket, setShowPeople, userName }) => {
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
    <div className="People-wrapper">
      <div className="Header">
        <h1 className="PrivateRooms">Private Rooms</h1>
        <CloseIcon className="CloseIcon" onClick={() => setShowPeople(false)} />
      </div>
      <div className="addPeopl-div">
        <IconButton>
          <div className="addframe" onClick={copyRoomId}>
            <PersonAddIcon />
            <h3>Add People</h3>
          </div>
        </IconButton>
        <div className="controlframe">
          <HdrStrongIcon style={{ fill: "#5F6368" }} />
          <h3>Room Controls</h3>
        </div>
      </div>
      <h1 className="Inroom">In room</h1>
      <div className="clients">
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

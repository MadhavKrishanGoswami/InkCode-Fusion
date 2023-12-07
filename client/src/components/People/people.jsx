import React, { useState } from "react";
import Client from "./clients";
import "./style.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import IconButton from "@mui/material/IconButton";
import toast from "react-hot-toast";
import ACTIONS from "../../Actions";

const People = ({ roomId, socket }) => {
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
    navigator.clipboard.writeText(roomId);
    toast.success("Room ID Copied");
  };
  return (
    <div className="People-wrapper">
      <div className="Header">
        <ArrowBackIcon className="ArrowBackIcon" style={{ fill: "#202124" }} />
        <h1 className="PrivateRooms">Private Rooms</h1>
        <CloseIcon className="CloseIcon" />
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
          <Client key={client.socketId} userName={client.userName} />
        ))}
      </div>
    </div>
  );
};

export default People;

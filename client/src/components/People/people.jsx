import React, { useState } from "react";
import Client from "./clients";
import "./people.css";

const people = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Madhav Goswami" },
    { socketId: 2, userName: "Saachi Badal" },
  ]);
  return (
    <div className="People-wrapper">
      <h1 className="people-title">People</h1>
      <button className="AddPeople">Add People</button>
      <h1 className="inroom-title">IN ROOM</h1>
      <div className="People-inner-wrapper">
        <div className="clients-list">
          {clients.map((clients) => (
            <Client key={clients.socketId} userName={clients.userName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default people;

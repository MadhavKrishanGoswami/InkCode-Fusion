import React from "react";
import UserAvatar from "./Avatar";
import "./style.css";

const Clients = ({ userName }) => {
  return (
    <div className="client">
      <UserAvatar />
      <span className="username">{userName}</span>
    </div>
  );
};

export default Clients;

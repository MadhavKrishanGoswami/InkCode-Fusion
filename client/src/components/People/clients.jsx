import React from "react";
import Avatar from "./Avatar";
const Clients = (userName) => {
  return (
    <div className="client">
      <Avatar />
      <span className="username">{userName}</span>
    </div>
  );
};

export default Clients;

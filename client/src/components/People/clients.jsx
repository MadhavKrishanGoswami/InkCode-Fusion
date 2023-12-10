import React from "react";
import UserAvatar from "./Avatar";
import "./style.css";

const Clients = ({ userName, You }) => {
  return (
    <div className="client">
      <UserAvatar />
      <span className="username">{userName}</span>
      {You && <span className="username"> (You)</span>}
    </div>
  );
};
export default Clients;

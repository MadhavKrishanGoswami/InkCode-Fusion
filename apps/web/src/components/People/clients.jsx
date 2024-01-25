import React from "react";
import UserAvatar from "./Avatar";

const Clients = ({ userName, You }) => {
  return (
    <div className="client">
      <UserAvatar userName={userName} />
      <span className="username">{userName}</span>
      {You && <span className="username"> (You)</span>}
    </div>
  );
};
export default Clients;

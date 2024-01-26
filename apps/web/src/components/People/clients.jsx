import React from "react";
import UserAvatar from "./Avatar";

const Clients = ({ userName, You }) => {
  return (
    <div className="flex items-center pl-6 pb-3 pt-1">
      <UserAvatar userName={userName} />
      <span className="username text-center text-ChatText font-Inter text-base font-normal pl-3">
        {userName}
      </span>
      {You && (
        <span className="username text-center text-ChatText font-Inter text-base font-normal p-2">
          {" "}
          (You)
        </span>
      )}
    </div>
  );
};
export default Clients;

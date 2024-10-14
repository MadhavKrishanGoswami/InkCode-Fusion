import React from "react";
const UserAvatar = (userName) => {
  const source = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${userName.userName}`;
  return (
    <div>
      <img src={source} className="w-[2.8vw] h-[2.8vw]" alt="Avatar"/>
    </div>
  );
};
export default UserAvatar;

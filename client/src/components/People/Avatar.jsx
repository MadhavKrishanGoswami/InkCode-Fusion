import React from "react";
import Avatar, { genConfig } from "react-nice-avatar";
const UserAvatar = () => {
  const config = genConfig();
  return (
    <div>
      <Avatar style={{ width: "2.8vw", height: "2.8vw" }} {...config} />
    </div>
  );
};

export default UserAvatar;

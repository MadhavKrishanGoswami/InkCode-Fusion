import React from "react";
import NiceAvatar, { genConfig } from "react-nice-avatar";
const UserAvatar = () => {
  const config = genConfig();
  return (
    <div>
      <NiceAvatar style={{ width: "2.8vw", height: "2.8vw" }} {...config} />
    </div>
  );
};
export default UserAvatar;

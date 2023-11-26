import React from "react";
import Forms from "../components/Forms/index";
import Cursor from "./GradientBubbles/GradientBubbles";
import "./Start.css";
const Start = () => {
  return (
    <div className="startPageWrapper">
      <Cursor className="background" />

      <Forms className="top" />
    </div>
  );
};

export default Start;

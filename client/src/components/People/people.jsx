import React from "react";
import Client from "./Clients";
import "./style.css";

const People = () => {
  return (
    <div className="People-wrapper">
      <h1 className="people-title">People</h1>
      <button className="AddPeople">Add People</button>
      <h1 className="inroom-title">IN ROOM</h1>
      <div className="People-inner-wrapper">
        <div className="clients-list"></div>
      </div>
    </div>
  );
};

export default People;

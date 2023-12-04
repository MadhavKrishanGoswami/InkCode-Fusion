import React, { useState, useEffect, useRef } from "react";
import meetingpng from "../Assets/images/meeting-logo.png";
import "./style.css";
import toast from "react-hot-toast";
import ACTIONS from "../../Actions";
import io from "socket.io-client";
import Editor from "../../components/Editor";
import Chat from "../../components/Chats/Chats";
import Whiteboard from "../../components/WhiteBoard/Whiteboard";
import VideoCall from "../../components/Video/VideoCall";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
const options = {
  "force new connection": true,
  reconnectionAttempt: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
const server = process.env.REACT_APP_BACKEND_URL;
const socket = io(server, options);
const date = new Date();

const Room = () => {
  const inCall = useRef(false);
  const location = useLocation();
  const reactNavigate = useNavigate();
  const { roomId } = useParams();
  const userName = location.state?.userName;

  useEffect(() => {
    const init = async () => {
      socket.on("connect_error", (err) => handleErrors(err));
      socket.on("connect_failed", (err) => handleErrors(err));

      // Define the handleErrors function
      function handleErrors(err) {
        console.log("socket error", err);
        toast.error("Socket Connection Error, Please try again");
        reactNavigate("/start");
      }

      // Emit a "join" event to the server
      socket.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });

      // Event listener for user joining the room
      socket.on(ACTIONS.JOINED, ({ clients, userName, socketId }) => {
        if (userName !== location.state?.userName) {
          toast.success(`${userName} joined the room`);
          inCall.current = true;
          console.log(`${userName} joined the room`); // Just for debugging
        }
      });
      // Event listener for user leaving the room
      socket.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast.success(`${userName} left the room`);
        console.log(`${userName} left the room`); // Just for debugging
      });
    };

    // Call the init function when the component mounts
    init();
    return () => {
      // Remove the event listeners and disconnect the Socket.io connection when the component unmounts
      socket.off(ACTIONS.JOINED);
      socket.off(ACTIONS.DISCONNECTED);
      socket.disconnect();
    };
  });

  // Redirect to the "/start" route if location.state is not defined
  if (!location.state) {
    return <Navigate to="/start" />;
  }

  // Render the Room component
  return (
    <div className="Room">
      <nav>
        <h1 className="InkCode">InkCode</h1>
      </nav>
      <div className="meeting-name">
        <img src={meetingpng} alt="meeting" className="meetingpng" />
        <div class="meeting-line"></div>
        <h1 className="meeting-name-text">Interview(Technical Round)</h1>
        <h2 className="meeting-date-time">
          {" "}
          {date.toLocaleString("default", { month: "long" })} {date.getDate()}
          th, {date.getFullYear()} | {date.getHours()}:{date.getMinutes()}{" "}
          {date.getHours() >= 12 ? "PM" : "AM"}{" "}
        </h2>
      </div>
      <div className="language">
        <h1 className="python">Python</h1>
      </div>
      <div className="Editor">
        <Editor socket={socket} roomId={roomId} />
      </div>
      {/* <Whiteboard socket={socket} />
      <Chat socket={socket} roomId={roomId} userName={userName} /> */}
      {/* <VideoCall roomId={roomId} setInCall={inCall} /> */}
    </div>
  );
};

// Export the Room component as the default export
export default Room;

import React, { useEffect } from "react";
import "./style.css";
import toast from "react-hot-toast";
import ACTIONS from "../../Actions";
import io from "socket.io-client";
import Editor from "../../components/Editor/Editor";
import VideoCall from "../../components/Video/VideoCall";
import MeetingTitle from "../../components/MeetingTitle/MeetingTitle";
import Python from "../../components/python/python";
import Nav from "../../components/nav/nav";
import { motion } from "framer-motion";
import NotificationRoomIn from "../Assets/Notification/Notification-RoomIn.mp3";
import NotificationRoomOut from "../Assets/Notification/Notification-RoomOut.mp3";

import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import MountComponents from "../../components/MountComponents/MountComponents";
const options = {
  "force new connection": true,
  reconnectionAttempt: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
const server = "https://inkcode-fusion-server.up.railway.app/";
const socket = io(server, options);

const Room = () => {
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
          console.log(`${userName} joined the room`); // Just for debugging
          const audio = new Audio(NotificationRoomIn);
          audio.play();
        }
      });
      // Event listener for user leaving the room
      socket.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast.success(`${userName} left the room`);
        console.log(`${userName} left the room`); // Just for debugging
        const audio = new Audio(NotificationRoomOut);
        audio.play();
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
  const leaveRoom = () => {
    reactNavigate("/end");
  };

  // Render the Room component
  return (
    <div className="Room overflow-hidden h-full">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "ease-in" }} // Change the transition type to "ease-in"
      >
        <Nav />
        <MeetingTitle />
      </motion.div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "ease-in" }} // Change the transition type to "ease-in"
      >
        <Python />
        <MountComponents socket={socket} roomId={roomId} userName={userName} />
        <Editor socket={socket} roomId={roomId} />
      </motion.div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "ease-in" }} // Change the transition type to "ease-in"
      >
        <VideoCall roomId={roomId} leaveRoom={leaveRoom} />
      </motion.div>
    </div>
  );
};

// Export the Room component as the default export
export default Room;

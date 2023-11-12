// Import necessary React hooks and components
import React, { useEffect, useRef } from "react";
import { initSocket } from "../socket"; // Import Socket.io initialization function
import ACTIONS from "../Actions"; // Import action constants
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"; // Import React Router hooks
import toast from "react-hot-toast"; // Import toast notification library
import Editor from "../components/Editor"; // Import the Editor component

const Room = () => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const location = useLocation();
  const reactNavigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      // Define the handleErrors function
      function handleErrors(err) {
        console.log("socket error", err);
        toast.error("Socket Connection Error, Please try again");
        reactNavigate("/start");
      }

      // Emit a "join" event to the server
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });

      // Event listener for user joining the room
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, userName, socketId }) => {
          if (userName !== location.state?.userName) {
            toast.success(`${userName} joined the room`);
            console.log(`${userName} joined the room`); // Just for debugging
          }
        }
      );
      // Event listener for user leaving the room
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast.success(`${userName} left the room`);
        console.log(`${userName} left the room`); // Just for debugging
      });
    };

    // Call the init function when the component mounts
    init();
    return () => {
      // Remove the event listeners and disconnect the Socket.io connection when the component unmounts
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
      socketRef.current.disconnect();
    };
  }, []);

  // Redirect to the "/start" route if location.state is not defined
  if (!location.state) {
    return <Navigate to="/start" />;
  }

  // Render the Room component
  return (
    <div>
      <Editor socketRef={socketRef} roomId={roomId} />{" "}
      {/* Render the Editor component */}
    </div>
  );
};

// Export the Room component as the default export
export default Room;

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

// Define the Room component
const Room = () => {
  // Ref to hold the Socket.io connection
  const socketRef = useRef(null);

  // React Router hooks for managing the route
  const location = useLocation();
  const reactNavigate = useNavigate();
  const { roomId } = useParams();

  // useEffect to initialize the Socket.io connection when the component mounts
  useEffect(() => {
    // Define the init function
    const init = async () => {
      // Initialize the Socket.io connection and store it in the ref
      socketRef.current = await initSocket();

      // Event listeners for Socket.io connection errors
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      // Define the handleErrors function
      function handleErrors(err) {
        console.log("socket error", err);
        // Display a toast notification on Socket Connection Error
        toast.error("Socket Connection Error, Please try again");

        // Navigate to the "/start" route on connection error
        reactNavigate("/start");
      }

      // Emit a "join" event to the server
      console.log("Emitting join event");
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });

      // Define cleanup logic for when the component is unmounted
      return () => {
        console.log("Room component unmounted");
        // Cleanup logic (if needed)
      };
    };

    // Call the init function when the component mounts
    init();
  }, []);

  // Redirect to the "/start" route if location.state is not defined
  if (!location.state) {
    return <Navigate to="/start" />;
  }

  // Render the Room component
  return (
    <div>
      <Editor /> {/* Render the Editor component */}
    </div>
  );
};

// Export the Room component as the default export
export default Room;

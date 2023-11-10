import { useEffect, useRef } from "react";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";

const Editor = () => {
  // Ref to hold the Socket.io connection
  const socketRef = useRef(null);

  // React Router hooks for managing the route
  const location = useLocation();

  const reactNavigate = useNavigate();
  const { roomId } = useParams();

  // useEffect to initialize the Socket.io connection when the component mounts
  useEffect(() => {
    const init = async () => {
      // Initialize the Socket.io connection and store it in the ref
      socketRef.current = await initSocket();

      // Event listeners for Socket.io connection errors
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(err) {
        console.log("socket error", err);
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
      return () => {
        console.log("Editor component unmounted");
        // Cleanup logic
      };
    };

    // Call the init function when the component mounts
    init();
  }, []);

  // State to hold the value of the code in the editor
  const [value, setValue] = React.useState("print('Hello World')");

  // Callback function to handle changes in the code editor
  const onChange = React.useCallback((val, viewUpdate) => {
    // Log the changed value to the console
    console.log("val:", val);

    // Update the state with the new value
    setValue(val);
  }, []);

  // Redirect to the "/start" route if location.state is not defined
  if (!location.state) {
    return <Navigate to="/start" />;
  }

  // Render the CodeMirror component with Python language support
  return (
    <CodeMirror
      value={value}
      height="200px"
      extensions={[python()]}
      onChange={onChange}
    />
  );
};

export default Editor;

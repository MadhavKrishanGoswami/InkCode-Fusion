import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ACTIONS from "../../Actions";
import "./style.css";

const Output = ({ socket, roomId, codeRef }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.OUTPUT, ({ data }) => {
        setOutput(data);
      });
    }
  }, [socket]);
  return (
    <div className="Output-div">
      <textarea type="text" readOnly value={output} className="Output" />
      <h1 className="outputText">OutPut</h1>
    </div>
  );
};

export default Output;

import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ACTIONS from "../../Actions";
import "./style.css";

const Output = ({ socket, roomId, codeRef }) => {
  const [output, setOutput] = useState("");
  const runCode = async () => {
    if (socket) {
      await socket.emit(ACTIONS.RUN_CODE, { code: codeRef.current, roomId });
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.OUTPUT, ({ data }) => {
        setOutput(data);
      });
    }
  }, [socket]);
  return (
    <div>
      <button variant="dark" onClick={runCode} className="runButton">
        Run
      </button>
      <div className="Output-div">
        <input type="text" readOnly value={output} className="Output" />
        <h1 className="outputText">OutPut</h1>
      </div>
    </div>
  );
};

export default Output;

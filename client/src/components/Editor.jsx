import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/theme/material.css";
import "codemirror/addon/edit/closebrackets";
import Codemirror from "codemirror";
import ACTIONS from "../Actions";

const Editor = ({ socket, roomId }) => {
  const editorRef = useRef(null);
  const codeRef = useRef(null);
  const [output, setOutput] = useState("Output");
  useEffect(() => {
    async function init() {
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realTimeEditor"),
        {
          mode: "python",
          theme: "material",
          lineNumbers: true,
          autoCloseBrackets: true,
        }
      );
      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        if (origin !== "setValue") {
          socket.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
        codeRef.current = code;
      });
    }
    init();
  });
  const runCode = async () => {
    if (socket) {
      await socket.emit(ACTIONS.RUN_CODE, { code: codeRef.current, roomId });
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
      socket.on(ACTIONS.OUTPUT, ({ data }) => {
        setOutput(data);
      });
    }
  }, [socket]);
  return (
    <div>
      <textarea id="realTimeEditor"></textarea>
      <Button variant="dark" onClick={runCode}>
        Run
      </Button>
      <Form.Control type="text" placeholder="Output" readOnly value={output} />
    </div>
  );
};

export default Editor;

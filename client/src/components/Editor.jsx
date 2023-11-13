import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/theme/material.css";
import "codemirror/addon/edit/closebrackets";
import Codemirror from "codemirror";
import ACTIONS from "../Actions";

const Editor = ({ socket, roomId }) => {
  const editorRef = useRef(null);
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
          socket.emit(
            ACTIONS.CODE_CHANGE,
            {
              roomId,
              code,
            },
            console.log("code change")
          );
        }
      });
    }
    init();
  });

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
  }, [socket]);

  return <textarea id="realTimeEditor"></textarea>;
};

export default Editor;

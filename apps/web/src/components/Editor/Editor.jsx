import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/theme/material.css";
import "codemirror/addon/edit/closebrackets";
import Codemirror from "codemirror";
import ACTIONS from "../../Actions";
import Output from "./output";
import { IconButton } from "@mui/material";

//import "./Editor.css";
const Editor = ({ socket, roomId }) => {
  const editorRef = useRef(null);
  const codeRef = useRef(null);

  useEffect(() => {
    async function init() {
      if (editorRef.current === null) {
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
        editorRef.current.setValue('print("Hello, world!")');
        // Set custom styles for the editor
        const wrapper = editorRef.current.getWrapperElement();
        wrapper.style.backgroundColor = "#111316";
        wrapper.style.color = "white";
        wrapper.style.borderRadius = "30px";
        wrapper.style.padding = "8px"; // Add padding
        wrapper.style.height = "48vh"; // Set height
        wrapper.style.width = "45%"; // Set width
        //increase font size
        editorRef.current.getWrapperElement().style["font-size"] = "19px";

        // Get gutter element and apply custom style for line strip color
        const gutter = wrapper.getElementsByClassName("CodeMirror-gutters")[0];
        gutter.style.backgroundColor = "#111316"; // Change line strip color

        // Get line number elements and apply custom styles
        const lineNumberElements = wrapper.getElementsByClassName(
          "CodeMirror-linenumber"
        );
        Array.from(lineNumberElements).forEach((el) => {
          el.style.fontFamily = "Consolas, Arial, sans-serif"; // Change font family
          el.style.color = "#717888"; // Change line number color
        });
      }
    }
    init();
  }, [roomId, socket]);

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
  }, [socket]);
  const runCode = async () => {
    if (socket) {
      await socket.emit(ACTIONS.RUN_CODE, { code: codeRef.current, roomId });
    }
  };

  return (
    <div className=" ml-[1.5vw] mt-[0.5vw]">
      <textarea id="realTimeEditor" className="Editor-Text"></textarea>
      <Output socket={socket} roomId={roomId} codeRef={codeRef} />
      <div
        className=" flex absolute justify-center items-center top-[65%] left-[37%]
         text-RunText border-[1px] border-StartBg font-Syne text-[1.4vw] rounded-[2.5vw] w-[6vw] h-[6vh] bg-[#3C4043] shadow-md shadow-black hover:bg-[#313538] cursor-pointer"
      >
        <IconButton onClick={runCode}>
          <span className="  text-RunText font-Syne text-[1.4vw] cursor-pointer w-[100%] h-[100%]">
            Run
          </span>
        </IconButton>
      </div>
    </div>
  );
};
export default Editor;

import React, { useEffect, useState } from "react";
import ACTIONS from "../../Actions";
//import "./output.css";

const Output = ({ socket, roomId, codeRef }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (socket) {
      console.log("Checking for socket");
      socket.on(ACTIONS.OUTPUT, ({ data }) => {
        setOutput(data);
        console.log(data);
      });
    }
  }, [socket]);
  return (
    <div
      className="Output-div flex w-[45%] h-[22vh] mt-6 px-4 py-3 gap-6 flex-col items-start
     flex-shrink-0 rounded-3xl bg-Darkblue shadow-md shadow-TSblack"
    >
      {" "}
      <textarea
        type="text"
        readOnly
        value={output}
        className="Output relative resize-none top-6 h-4/5 w-full flex-shrink-0 text-Output rounded-xl
         p-0 m-0 outline-none border-none bg-Darkblue overflow-hidden"
      />
      <h1 className="outputText absolute text-lg px-0 font-bold text text-Output">
        OutPut
      </h1>
    </div>
  );
};

export default Output;

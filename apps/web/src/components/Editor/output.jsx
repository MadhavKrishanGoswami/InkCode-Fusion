import React, { useEffect, useState } from "react";
import ACTIONS from "../../Actions";
//import "./output.css";

const Output = ({ socket }) => {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (socket) {
      console.log("Checking for socket");
      socket.on(ACTIONS.OUTPUT, ({ data }) => {
        setOutput(data.run || data);
        setIsLoading(false);
        console.log(data);
        console.log("Output received");
      });

      socket.on("task_update", (message) => {
        const parsedMessage = JSON.parse(message);
        setOutput(
          parsedMessage.codeOutput.run || parsedMessage.codeOutput.error
        );
        setIsLoading(false);
      });
    }

    return () => {
      if (socket) {
        socket.off(ACTIONS.OUTPUT);
        socket.off("task_update");
      }
    };
  }, [socket]);

  return (
    <div
      className="flex w-[50%] h-[22vh] mt-6 px-4 py-3 gap-6 flex-col items-start
     flex-shrink-0 rounded-3xl bg-Darkblue shadow-md shadow-black"
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <textarea
            type="text"
            readOnly
            value={
              output
                ? `${output.stdout}` ||
                  `${output.stderr.split("\n").slice(1).join("\n")}`
                : ""
            }
            className="resize-none top-6 h-4/5 w-full flex-shrink-0 text-Output rounded-xl
         p-0 m-0 mt-2 outline-none border-none bg-Darkblue overflow-hidden text-xl text-white"
          />
          <span className="outputText absolute text-lg px-0 font-bold text-Output  ">
            Output
          </span>
        </>
      )}
    </div>
  );
};

export default Output;

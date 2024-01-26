import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ACTIONS from "../../Actions";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import "./Chats.css";
import NotificationMessage from "../../pages/Assets/Notification/Notification-Message.mp3";

const Chat = ({ socket, roomId, userName, setShowChat, isVisible }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  console.log(messageList);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: roomId,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit(ACTIONS.SEND_MESSAGE, messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.RECEIVE_MESSAGE, (data) => {
        setMessageList((list) => [...list, data]);
        const audio = new Audio(NotificationMessage);
        audio.volume = 0.1; // Set the volume to 50%
        audio.play();
      });
    }
  }, [socket]);
  useEffect(() => {
    scrollToBottom(); // Scroll to bottom on initial render
  }, []);

  return (
    <motion.div className={`${isVisible ? "visible" : "hidden"}`}>
      <div
        className="flex flex-col absolute z-50 right-[2%] top-[5%] w-[24%] h-[84%] max-w-sm flex-shrink-0
       rounded-2xl bg-White shadow-xl shadow-black"
      >
        {" "}
        <div className="p-6 pr-3 pb-1 pl-5 flex w-full">
          <span className="font-Roboto text-base font-medium leading-normal ml-1">
            In-room messages
          </span>
          <CloseIcon
            className="ml-auto cursor-pointer scale-120 mr-2"
            onClick={() => setShowChat(false)}
          />
        </div>
        <div className="flex w-full py-4 px-4 justify-between items-center">
          <div className="flex flex-col w-full h-16 justify-center items-center rounded bg-ChatBg">
            <span
              className="flex items-center text-ChatText font-Roboto text-sm xl:text-sm 
            font-normal"
            >
              Main Meet Messages
            </span>
          </div>
        </div>
        <div className="chat-body flex-1 overflow-auto relative">
          <ScrollToBottom
            className=" w-full h-full text-sm font-Roboto px-1 mt-6 
          font-normal"
          >
            <div
              className="flex px-1 py-2 items-start gap-10 rounded-4 bg-ChatBg w-64 
            xl:w-72 ml-[10%] mr-1 mb-0.5 justify-center"
            >
              <span
                className="text-center text-ChatText font-Roboto text-xs xl:text-xs
              font-Normal w-[75%]"
              >
                Messages can only be seen by people in the call and are deleted
                when the call ends.
              </span>
            </div>
            {messageList.map((messageContent) => {
              return (
                <div
                  className={`message ${
                    userName === messageContent.author ? "you" : "other"
                  }`}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </ScrollToBottom>
        </div>
        <div
          className="flex items-center relative w-[95%] mb-3 h-14 bg-gray-50 rounded-3xl
         bg-[#F1F3F4] mx-auto"
        >
          <input
            type="text"
            className="w-full h-full border-none outline-none px-4 py-3 mt-2 mb-2 text-base 
            font-roboto font-normal bg-transparent"
            value={currentMessage}
            placeholder="Send a message to everyone"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <SendIcon onClick={sendMessage} className="mx-2" />
        </div>
      </div>
    </motion.div>
  );
};
export default Chat;

import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ACTIONS from "../../Actions";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
//import "./Chats.css";

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
      });
    }
  }, [socket]);
  useEffect(() => {
    scrollToBottom(); // Scroll to bottom on initial render
  }, []);

  return (
    <div
      className="chat-window flex flex-col absolute z-50 left-[72%] top-[5%] w-1/4  
    h-[85%] flex-shrink-0 rounded-2xl bg-white"
    >
      <div className="Header w-full flex items-center justify-center">
        <h1
          className="PrivateRooms text-ChatText font-Roboto text-base xl:text-xl 
        font-medium pl-9"
        >
          In-room messages
        </h1>
        <CloseIcon
          className="CloseIcon cursor-pointer ml-auto"
          onClick={() => setShowChat(false)}
        />
      </div>
      <div className="chatTtitle flex w-full py-3 px-4 justify-between items-center">
        <div
          className="chatTtitleInner flex flex-col w-full h-12 justify-center items-center 
        rounded bg-ChatBg"
        >
          <h1
            className="chatTtitleInnerh1 flex items-center text-ChatText font-Roboto text-sm 
          xl:text-base font-normal"
          >
            Main Meet Messages
          </h1>
        </div>
      </div>
      <div className="chat-body flex-1 overflow-auto relative ">
        <ScrollToBottom
          className="message-container w-full h-full text-base font-Roboto 
        px-1 mt-6 font-normal"
        >
          <div
            className="info flex mx-auto px-3 py-2 items-start gap-10 rounded-4 bg-ChatBg 
          w-64 xl:w-72 ml-1 mr-1 mb-0.5"
          >
            <span
              className="infotext text-center text-ChatText font-Roboto text-xs xl:text-sm 
            font-Normal"
            >
              Messages can only be seen by people in the call and are deleted
              when the call ends.
            </span>
          </div>
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={userName === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  {/*<div className="message-meta text">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>*/}
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div
        className="chat-footer flex items-center relative w-11/12  my-auto mx-0 rounded-lg 
      bg-gray-50"
      >
        <input
          type="text"
          className="message-input w-full h-full border-none outline-none px-4 py-3 mt-2 mb-2 
          rounded-3xl bg-gray-50 text-base font-roboto font-normal text-gray-800"
          value={currentMessage}
          placeholder="Send a message to everyone"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <SendIcon onClick={sendMessage} />
      </div>
    </div>
  );
};
export default Chat;

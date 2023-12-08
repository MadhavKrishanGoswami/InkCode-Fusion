import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ACTIONS from "../../Actions";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import "./Chats.css";

const Chat = ({ socket, roomId, userName, setShowChat }) => {
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
    <div className="chat-window">
      <div className="Header">
        <h1 className="PrivateRooms">In-room messages</h1>
        <CloseIcon className="CloseIcon" onClick={() => setShowChat(false)} />
      </div>
      <div className="chatTtitle">
        <div className="chatTtitleInner">
          <h1 className="chatTtitleInnerh1">Main Meet Messages</h1>
        </div>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          <div className="info">
            <span className="infotext">
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
                  {/* <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div> */}
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="message-input"
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

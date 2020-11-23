import React from 'react';

import useChat from '../useChat';

const ChatBox = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <form action="room/" method="POST">
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message ..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button" type="submit">
        Send
      </button>
      </form>
    </div>
  );
};

export default ChatBox;
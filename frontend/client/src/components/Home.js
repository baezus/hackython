import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Watchopolis!</h1>
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />

      <Link to={`room/${roomName}`} className="enter-room-button">
        Join room
      </Link>
      
    </div>
  );
};

export default Home;
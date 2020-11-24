import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import VideoPlayer from './VideoPlayer';
import landingPage from '../images/landingPage.png';

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="home-image">
        <img
          className="home-logo"
          src={landingPage}
          alt="logo"
        />
      </div>
      <div className="container">
        <div className="home-content">
          <strong><p>Watch movies and videos</p>
          <p>with your friends!</p></strong>
        </div>

        <section className="card">
          <p>Join a room</p>
          <input
            className="input-field"
            type="text"
            placeholder="Room"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-field"
          />
          <input
            className="input-field"
            type="text"
            placeholder="Nickname"
            // value={roomName}
            // onChange={handleRoomNameChange}
            className="text-input-field"
          />

          <Link to={`room/${roomName}`} className="enter-room-button">
            Enter Room
          </Link>
        </section>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
};

export default Home;
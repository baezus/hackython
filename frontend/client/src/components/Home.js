import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="home-image" >
        <img
          className='home-logo'
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt="logo"
        />
      </div>
      <div className='container'>
      <div className='home-content'>
        <p>Watch movies and videos</p>
        <p>with your friends!</p>
      </div>
        
      <section className='card'>
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
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='rectangle'></div>
    </div>
     

    
    </div>
  );
};

export default Home;
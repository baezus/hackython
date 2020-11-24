import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatBox from '../components/ChatBox';
import './RoomPage.css';

class RoomPage extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <h1>Room Page</h1>
        <div className = "video_container">
        <VideoPlayer className='videoplayer'/>
        </div>
        <div className="chatbox">
          <ChatBox />
        </div>
        <div className="video_details">
        <h2 className="video_details" id="roomID">Room ID:{this.props.roomId}</h2>
        <h3 className="video_details">https://www.watchopolis.com/room/{this.props.roomId}</h3>
        </div>
      </div>
    )
  }
}

export default RoomPage;
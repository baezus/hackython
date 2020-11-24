import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatBox from '../components/ChatBox';
import './RoomPage.css';
import { Container, Row, Col } from 'react-bootstrap';

class RoomPage extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <div className="video-container">        
          <Col><VideoPlayer/></Col>
        </div>
        <div className="chatbox-container">
          <Col><ChatBox className="chatbox-container"/></Col>
        </div>
      

        <br/><br/>
        <div className="video_details">
          <h2 className="video_details" id="roomID">Room ID:{this.props.roomId}</h2>
      
          <h3 className="video_details">https://www.watchopolis.com/room/{this.props.roomId}</h3>
        </div>
        
        
       
      </div>
    )
  }
}

export default RoomPage;
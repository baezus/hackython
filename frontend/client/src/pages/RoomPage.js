import React from 'react';
import ChatBox from '../components/ChatBox';
import Chat from '../components/Message';

class RoomPage extends React.Component{
  render(){
    return(
      <div>
        <h1>Room Page</h1>
        <ChatBox />
        <Chat />
      </div>
    )
  }
}

export default RoomPage;
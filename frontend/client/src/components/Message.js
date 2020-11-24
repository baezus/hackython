import React from 'react';
import { Event } from 'react-socket-io';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(message) {
    console.log(message);
  }

  render() {
    return (
      <div>
        <h1>React-Socket-IO Demo</h1>
        <Event event='eventName' handler={this.onMessage} />
      </div>
    );
  }
}

export default Chat;
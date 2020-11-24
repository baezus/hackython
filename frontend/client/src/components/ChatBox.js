import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const URL = 'ws://localhost:3001';

class ChatBox extends Component {
  state = {
    name: '',
    messages: [],
  }

  ws = new WebSocket (URL)

  componentDidMount() {
    this.ws.onopen = () => {
      //on connecting, do nothing but log to the console.
      console.log('socket connected')
    }

    this.ws.onmessage = evt => {
      //on receieving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message);
    }

    this.ws.onclose = () => {
      console.log('disconnected from socket')
      //automatically try to reconnect on connection loss
      this.setState({ 
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message => 
    this.setState(state => ({ messages: [message, ...state.messages]}))

  submitMessage = messageString => {
    //on submitting the ChatInput form, send the message, add it to the messages list, and reset the input.
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div className="chatForm">
        <label htmlFor="name">
          <input 
            type="text"
            id={'name'}
            placeholder={'Enter your name ...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
          />
          {this.state.messages.map((message, index) => 
          <ChatMessage 
            key={index}
            message={message.message}
            name={message.name}
            />,
          )}
      </div>
    )
  }
}

export default ChatBox;
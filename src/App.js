import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PongContainer from './pongContainer'
import openSocket from 'socket.io-client'
const socket = openSocket.connect('192.168.1.187:2000');
class App extends Component {
  constructor(props) {
    super(props);
    socket.on('startGame', () => {
      this.setState({gamePlay: true})
    })
    this.state = {
      gamePlay: false,
      onePlayer: false,
    }
  }

  render() {

    return (
      <div className="App">
        {this.state.gamePlay
          ? <PongContainer socket={socket}  />
          :  <p>waiting...</p>
        }

      </div>
    );
  }
}

export default App;

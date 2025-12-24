import React, { Component } from 'react';
import './App.css';
import PongContainer from './pongContainer'
import Pending from './Pending'
import Waiting from './waiting'

import { createSocket, getSocketUrl } from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = createSocket();
    this.state = {
      gamePlay: false,
      pending: false,
      offline: !this.socket,
    }
  }

  endGame = () => {
    this.setState({gamePlay: false, pending: true})
    setTimeout(() => {
      this.setState({pending: false})
    }, 5000)
  }

  startOfflineDemo = () => {
    this.setState({ gamePlay: true, pending: false, offline: true });
  }

  componentDidMount() {
    if (this.socket) {
      this.socket.on('startGame', () => {
        this.setState({ gamePlay: true, offline: false });
      });

      this.socket.on('gameTimedOut', () => {
        this.setState({ gamePlay: false, pending: false });
      });
    }
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.off('startGame');
      this.socket.off('gameTimedOut');
      this.socket.close();
    }
  }


  render() {
    const socketUrl = getSocketUrl();

    return (
      <div className="App">

        {this.state.pending
          ? <Waiting/>
          : this.state.gamePlay
             ? (
                <PongContainer
                  socket={this.socket}
                  endGame={this.endGame}
                  offline={this.state.offline}
                />
              )
             : (
                <Pending
                  socketUrl={socketUrl}
                  offline={!socketUrl}
                  onStartOfflineDemo={this.startOfflineDemo}
                />
              )
         }

      </div>
    );
  }
}

export default App;

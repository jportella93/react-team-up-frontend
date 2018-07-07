import React, { Component } from 'react'
import './pongContainer.css'
import PongRed from '../pongRed'
import PongBlue from '../pongBlue'
import Ball from '../ball'
import openSocket from 'socket.io-client'
const socket = openSocket('192.168.1.187:2000')



class PongContainer extends Component {
  constructor(props) {
    super(props);
    // this.playGame()
    this.state = {
      ball: {
        x: 500,
        y: 500
      },
      ballvector: {
        x: -1,
        y: 2
      },

      bluePong:500,

      redPong:500,

      windowSize: {
        x: 0,
        y: 0
      },

    }
  }


playGame = () => {
    socket.on(
      'frame', frame => {
        this.setState({
          bluePong: frame.bluePong,
          redPong: frame.redPong
        })
        console.log('red: ', this.state.redPong, 'blue: ',  this.state.bluePong)
      })
}


//Button Functions


handleUpR = (e) => {
    e.preventDefault();
    let y = this.state.redPong - 30
    this.setState({redPong : y})

  }

handleDownR = (e) => {
    e.preventDefault();
    let y = this.state.redPong + 30
    this.setState({redPong : y})

  }
handleUpB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong - 30
    this.setState({bluePong : y})

  }

handleDownB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong + 30
    this.setState({bluePong : y})
  }



//Ball Functions


  moveBall = () => {
    setInterval(() => {
      let ball = {...this.state.ball}
      let ballvector = {...this.state.ballvector}
      let windowSize = {...this.state.windowSize}

      //paddle position calculations
      let redPong = this.state.redPong
      let bluePong = this.state.bluePong
      let bluePongWidth = {
        high: bluePong - windowSize.y * 0.11,
        low: bluePong + windowSize.y * 0.11,
        x: windowSize.x * 0.998 - 10
      }
      let redPongWidth = {
        high: redPong - windowSize.y * 0.11,
        low: redPong + windowSize.y * 0.11,
        x: windowSize.x * 0.002 + 10
      }


      console.log('ball.x: ', ball.x, 'ballvector.x: ', ballvector.x)

      //y-coordinate calculations
      if (ball.y <= 15 && ballvector.y > 0)  {
        ballvector.y = ballvector.y * -1
      }
      if (ball.y >= windowSize.y  && ballvector.y < 0)  {
        ballvector.y = ballvector.y * -1
      }
      ball.y = ball.y - ballvector.y;

      //x-coordinate calculations

      console.log({
        // 'Ball x-coordinate': ball.x,
        'bluePongWidth.high': bluePongWidth.high,
        'ball.x': ball.x,
        'bluePongWidth.low': bluePongWidth.low,
        'bluePongWidth.x': bluePongWidth.x,
        'ball.y': ball.y
      })

      if ((redPongWidth.high < ball.y && ball.y < redPongWidth.low) && (redPongWidth.x * 0.9 <  ball.x && ball.x < redPongWidth.x * 1.1) ) {
        ballvector.x = ballvector.x * -1
      }

      if ((bluePongWidth.high < ball.y && ball.y < bluePongWidth.low) && (bluePongWidth.x * 0.99 <  ball.x && ball.x < bluePongWidth.x * 1.01) ) {
        ballvector.x = ballvector.x * -1
      }
      ball.x -= ballvector.x

      if (ball.x < 0 || ball.x > windowSize.x) {
        this.setState({ball: {x: 500, y: 500}})
        alert('you lost, bitch')
      }
      this.setState({ball, ballvector})
    }, 1000/300)
  }






  componentWillMount () {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({windowSize: {x: width, y: height}})
  }

  componentDidMount() {
    // this.moveBall()
  }

  render() {
    return (
      <div className='pong-container'>


        {/* <div className='button-red'>
          <button className='redPongUp' onClick={(e) => {this.handleUpR(e)}}>Up</button>
          <button className='redPongDown' onClick={(e) => {this.handleDownR(e)}}>Down</button>
        </div>
        <div className='button-blue'>
          <button className='bluePongUp' onClick={(e) => {this.handleUpB(e)}}>Up</button>
          <button className='bluePongDown' onClick={(e) => {this.handleDownB(e)}}>Down</button>
        </div> */}


        <div className='scoreRed'>
          <p className='score'>3</p>
        </div>
        <div className='scoreBlue'>
          <p className='score'>0</p>
        </div>



        <Ball
          position={{
            x:  this.state.ball.x,
            y: this.state.ball.y
          }}

        />

        <PongRed
          className='pongRed'
          y={this.state.redPong}/>

          <div className='center-line'>
          </div>

        <PongBlue
          className='pongBlue'
          y={this.state.bluePong}/>
      </div>
    );
  }
}

export default PongContainer;

import React, { Component } from 'react'
import './pongContainer.css'
import PongRed from '../pongRed'
import PongBlue from '../pongBlue'
import Ball from '../ball'
import openSocket from 'socket.io-client';
const socket = openSocket.connect('192.168.1.187:2000');
const ip = '192.168.1.187:3000'



class PongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      bluePong:500,
      redPong:500,
      ball: {
        x: 500,
        y: 500
      },
      ballvector: {
        x: 2,
        y: 2,
      },
      score: {
        blue: 4,
        red: 4
      },
      windowSize: {
        x: 0,
        y: 0
      },

    }
    this.gamePlay()
  }


gamePlay = () => {

    this.props.socket.on('frame', frame => {
      this.setState({
        bluePong: frame.bluePong,
        redPong: frame.redPong
      })
    })
}

//Button Functions


handleUpR = (e) => {
    e.preventDefault();
    let y = this.state.redPong - 30

    if (this.state.redPong > 2) {
      this.setState({redPong : y})
    }
  }

handleDownR = (e) => {
    e.preventDefault();
    let y = this.state.redPong + 30

    if ((this.state.redPong < (this.state.windowSize.y * 0.88))) {
      this.setState({redPong : y})
    }
    console.log(this.state.windowSize.y, (this.state.redPong * 1.11))
  }

handleUpB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong - 30
    if (this.state.bluePong > 2) {
      this.setState({bluePong : y})
    }

  }

handleDownB = (e) => {
    e.preventDefault();
    let y = this.state.bluePong + 30
    if ((this.state.bluePong < (this.state.windowSize.y * 0.88))) {
      this.setState({bluePong : y})
    }
  }



//Ball Functions


  moveBall = () => {

    let rate = 100
    setInterval((rate) => {

     let ball = {...this.state.ball}
     let ballvector = {...this.state.ballvector}
     let windowSize = {...this.state.windowSize}

     //paddle position calculations
     let redPong = this.state.redPong
     let bluePong = this.state.bluePong
     let bluePongWidth = {
       high: bluePong,
       low: bluePong + windowSize.y * 0.11,
       x: windowSize.x * 0.998 - 10
     }
     let redPongWidth = {
       high: redPong,
       low: redPong + windowSize.y * 0.11,
       x: windowSize.x * 0.002 + 10
     }

     //ball margins --- we need to take into account the radius of the ball
     let bally_high = ball.y * 1.0115
     let bally_low = ball.y * (1 -0.0115)
     let ballx_high = ball.x * 1.0115
     let ballx_low = ball.x * (1 -0.0115)


     //y-coordinate calculations
     if (bally_low <= 1 && ballvector.y > 0)  {
       ballvector.y = (ballvector.y * -1.1)
     }
     if (bally_high >= windowSize.y + 1  && ballvector.y < 0)  {
       ballvector.y = (ballvector.y * -1.1)
     }
     ball.y = ball.y - ballvector.y;

     //x-coordinate calculations
     if (((redPongWidth.high * 0.96) < ball.y && ball.y < (redPongWidth.low * 1.04)) && ((redPongWidth.x * 0.2) <  ball.x && ball.x < (redPongWidth.x * 1.2)) ) {
       ballvector.x = (ballvector.x * -1.1)
       console.log(rate)
     }

     if (((bluePongWidth.high * 0.96) < ball.y && ball.y < (bluePongWidth.low * 1.04)) && ((bluePongWidth.x * 0.992) <  ball.x && ball.x < (bluePongWidth.x * 1.008)) ) {
       ballvector.x = (ballvector.x * -1.1 )
       console.log(rate)
     }
     ball.x += ballvector.x

     if (ball.x < 0) {
       let score = {...this.state.score}
       ball.x = windowSize.x / 2
       ball.y = windowSize.y / 2
       ballvector.x = 2
       ballvector.y = 2
       if (score.red > 1) {
         score.red -= 1
         this.setState({ball, ballvector, score})
       } else {
         score.blue = 3; score.red = 3;
         this.setState({ball, ballvector, score})
         this.props.socket.emit('endGame', 'blue')
         this.props.endGame()
       }
     }

     if (ball.x > windowSize.x) {
       let score = {...this.state.score}
       ball.x = windowSize.x / 2
       ball.y = windowSize.y / 2
       ballvector.x = 2
       ballvector.y = 2

       if (score.blue > 1) {
         score.blue -= 1
         this.setState({ball, ballvector, score})
       } else {
         this.setState({ball, ballvector, score})
         this.props.socket.emit('endGame', 'red')
         this.props.endGame()
         score.blue = 3; score.red = 3;

       }
     }


     this.setState({ball, ballvector})
   }, 1000/rate)
 }



  componentWillMount () {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({windowSize: {x: width, y: height}})
    }

  componentDidMount() {
    let height = this.state.windowSize.y * .89
    let windowsize = {
      'height': height,
      'width': this.state.windowSize.x
    }
    this.props.socket.emit('windowSize', windowsize)
    this.moveBall()
  }

  componentWillUnmount() {
    this.props.socket.emit('screenBye')
  }


  render() {
    return (
      <div className='pong-container'>

{/*
        <div className='button-red'>
          <button className='redPongUp' onClick={(e) => {this.handleUpR(e)}}>Up</button>
          <button className='redPongDown' onClick={(e) => {this.handleDownR(e)}}>Down</button>
        </div>
        <div className='button-blue'>
          <button className='bluePongUp' onClick={(e) => {this.handleUpB(e)}}>Up</button>
          <button className='bluePongDown' onClick={(e) => {this.handleDownB(e)}}>Down</button>
        </div> */}


        <div className='scoreRed'>
          <p className='score'>{this.state.score.red}</p>
        </div>
        <div className='scoreBlue'>
          <p className='score'>{this.state.score.blue}</p>
        </div>

        <div className='ip'>
          <p>{ip}</p>
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

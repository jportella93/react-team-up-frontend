import React, { Component } from 'react'
import './ball.css'

class Ball extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ball: {
        x: 100,
        y: 100,
      },
      windowSize: {
        x:0,
        y:0,
      },
    }
  }

  // endGame () {
  //   let ball = this.state.ball
  //   let windo = this.state.windowSize
  //   if (ball.x < 0 || ball.x > windo.x) {
  //     alert('game lost')
  //   }
  // }

  game () {
    let randomizer = Math.random() * 360 // we will use this to decide how initial ball drop starts
    let y;
    let x;
    let ball = this.state.ball
    let windowSize = this.state.windowSize
    let state;

    if (randomizer > 270) {
      y = 1; x = -1
    } else if ( randomizer > 180) {
      y = -1; x = -1
    } else if ( randomizer > 90) {
      y = -1; x = 1
    } else {
      y = 1; x = 1
    }

     setInterval(() => {

      if (windowSize.y * 0.015 <= ball.y <= windowSize.y * 0.985) { // taking into account ball's radius
          ball.y += y
          ball.x += x
          this.setState({ball: ball, windowSize: windowSize})
          console.log('STATE--------', this.state)
          console.log('X-coordinate: ', this.state.ball.x, 'y-coordinate: ', this.state.ball.y)
      } else if (windowSize.y * 0.015 > ball.y > windowSize.y * 0.985 ){
          if (y < 0) {y = 1} else {y = -1} // switch going down to going up
          ball.y += y
          ball.x += x
          console.log('X-coordinate: ', this.state.ball.x, 'y-coordinate: ', this.state.ball.y)
          this.setState({ball: ball, windowSize: windowSize})
      // } else if (ball.x < 0.015 || ball.x > windowSize.x * 0.985) {
      //   alert('game lost')
      }
    }, 2000)
  }





  componentDidMount () {
    let height = window.innerHeight
    let width = window.innerWidth

    this.setState({
      ball: { x: width / 2, y: height / 2 },
      windowSize: { x: width, y: height }
    })

    }

  render() {
    // this.game();
    return (
      <div
        className='ball'
        style={{
          top: this.state.ball.y,
          left: this.state.ball.x
        }}>
      </div>
    );
  }






}

export default Ball;

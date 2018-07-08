import React, { Component } from 'react'
import './ball.css'

class Ball extends Component {
  render() {
    return (
      <div
        className='ball'
        style={{
          top: this.props.position.y,
          left: this.props.position.x
        }}
        >
      </div>
    );
  }
}

export default Ball;

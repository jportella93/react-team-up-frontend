import React, { Component } from 'react'
import './pongRed.css'

class PongRed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='pongRed'
        style={{
          top: this.props.y
        }}>
        </div>
    );
  }
}

export default PongRed;

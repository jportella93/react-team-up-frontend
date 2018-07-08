import React, { Component } from 'react'
import './pending.css'
import homescreen from '../assets/homescreen.mp4'

class Pending extends Component {
  constructor(props){
    super(props);
    this.state = {
      playVideo: true
    }
  }


  playVideo = () => {
    if (this.state.playVideo) return (
      <video width="100%" autoPlay muted loop className="videoContainer">
        <source src={homescreen} type="video/mp4" />
      </video>
    );
  }


  render() {
    return (
      <div className='component'>
        <div className="pending-component">
          {this.state.playVideo ? this.playVideo() : null}
          <div className='pending'>
            <p className='pend'>
              <span>1</span>
              <span>9</span>
              <span>2</span>
              <span>.</span>
              <span>1</span>
              <span>6</span>
              <span>8</span>
              <span>.</span>
              <span>1</span>
              <span>.</span>
              <span>1</span>
              <span>8</span>
              <span>7</span>
              <span>:</span>
              <span>3</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
            </p>
          </div>
        </div>
        <div className='opacity'>
        </div>
      </div>

    )
  }
}

export default Pending

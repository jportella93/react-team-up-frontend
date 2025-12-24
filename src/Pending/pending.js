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
    const { offline, socketUrl, onStartOfflineDemo } = this.props;
    return (
      <div className='component'>
        <div className="pending-component">
          {this.state.playVideo ? this.playVideo() : null}
          <div className='pending'>
            <p className='pend'>
              {offline ? (
                <>
                  <span>O</span><span>F</span><span>F</span><span>L</span><span>I</span><span>N</span><span>E</span>
                </>
              ) : (
                <>
                  {String(socketUrl || '').split('').map((ch, idx) => (
                    <span key={idx}>{ch}</span>
                  ))}
                </>
              )}
            </p>
            {offline ? (
              <div style={{ marginTop: 16 }}>
                <p style={{ color: 'white', margin: '8px 0' }}>
                  No backend configured. Set <code>REACT_APP_SOCKET_URL</code> to enable online mode, or start the offline demo.
                </p>
                <button
                  onClick={onStartOfflineDemo}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.4)',
                    background: 'rgba(0,0,0,0.35)',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  Start offline demo
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className='opacity'>
        </div>
      </div>

    )
  }
}

export default Pending

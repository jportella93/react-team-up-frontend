import openSocket from 'socket.io-client'
const socket = openSocket('x')

const playGame = (callback) => {
  socket.on('frame', frameCoordinates => (null, frameCoordinates))
  socket.emit('playGame')
}

export { playGame }

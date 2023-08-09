import { Server as SocketServer } from 'socket.io'
import http from 'http'

let ioInstance: SocketServer

export const initializeSocket = (httpServer: http.Server) => {
  ioInstance = new SocketServer(httpServer, {
    cors: { origin: '*' }
  })
}

export const getSocketInstance = () => {
  if (!ioInstance) {
    throw new Error('Socket.IO instance has not been initialized.')
  }
  return ioInstance
}

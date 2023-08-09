import 'reflect-metadata'
import { Container } from 'inversify'
import express from 'express'
import cors from 'cors'
import { InversifyExpressServer } from 'inversify-express-utils'
import http from 'http'
import { AppDIContainer } from './AppDIContainer'
import PeopleDbService from '../../infrastructure/PeopleDbService'
import { initializeSocket } from './SocketInstance'

/**
 * This class takes about to startup the server.
 * Here you can configure your application dependencies by dependency inhection pattern.
 */
class AppServer {
  private container: Container
  private port: string

  constructor () {
    this.container = AppDIContainer
    this.port = process.env.PORT || '8080'
  }

  async Startup () {
    //This const takes the PeopleDbService configuration then do the connection.
    const db = this.container.get(PeopleDbService)
    await db.connect()

    /**
     * This const creates a new instance of InversifyExpressServer.
     * Read more about how it works and why to use it: https://inversify.io/
     */
    const server = new InversifyExpressServer(this.container)

    //Configure application.
    server.setConfig(app => {
      app.use(cors())
      app.use(express.json())
    })

    //Build application.
    const app = server.build()

    //Configure socket server implementation.
    const serverFromApp = http.createServer(app)

    const httpServer = serverFromApp.listen(this.port, () => {
      console.log('Server running on port: ' + this.port)
    })

    initializeSocket(httpServer)
  }
}

export default AppServer

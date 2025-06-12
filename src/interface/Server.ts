import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import userRouter from '../infrastructure/driving-adapters/api-rest/routes/user.routes'
import { errorHandler } from '../infrastructure/driving-adapters/api-rest/middleware/errorHandler'

export class Server  {
  private readonly app = express()

  constructor () {
    this.configureMiddleware()
    this.configureRoutes()
    this.configureErrorHandling()
  }

  private configureMiddleware (): void {
    this.app.use(cors())
    this.app.use(json())
  }

  private configureRoutes (): void {
    this.app.use('/api/v1/auth', userRouter)
  }

  private configureErrorHandling (): void {
    this.app.use(errorHandler)
  }

  public getApp (): express.Express {
    return this.app
  }
}
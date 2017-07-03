import * as express from 'express'
import {Express, Router, Request, Response} from 'express'
import {ReviewRoutes} from './src/ReviewRoutes'

class App {
  public express: Express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router: Router = express.Router()
    router.use((req: Request, res: Response, next: Function) => {
      console.log(`Request: ${req.url}`)
      next()
    })
    router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
    this.express.use(new ReviewRoutes().getRoutes())
  }
}

export default new App().express
